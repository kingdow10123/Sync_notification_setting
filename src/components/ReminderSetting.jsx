import React, { useState } from 'react';
import './ReminderSetting.css';

function ReminderSetting() {
  const [measureTimeEnabled, setMeasureTimeEnabled] = useState(false);
  const [dailyTipEnabled, setDailyTipEnabled] = useState(false);
  const [lineNotify, setLineNotify] = useState(false);
  const [surveyNotify, setSurveyNotify] = useState(false);
  const [measureTime, setMeasureTime] = useState('尚未設定');
  const [dailyTipTime, setDailyTipTime] = useState('尚未設定');

  const [showModal, setShowModal] = useState(false);
  const [modalTarget, setModalTarget] = useState('');
  const [tempTime, setTempTime] = useState('');

  const openModal = (target) => {
    setModalTarget(target);
    if (target === 'measure') {
      setTempTime(measureTime.includes(':') ? measureTime : '');
    } else {
      setTempTime(dailyTipTime.includes(':') ? dailyTipTime : '');
    }
    setShowModal(true);
  };

  const saveTime = () => {
    if (modalTarget === 'measure') {
      setMeasureTime(tempTime || '尚未設定');
    } else {
      setDailyTipTime(tempTime || '尚未設定');
    }
    setShowModal(false);
  };

  const confirmSettings = () => {
    const settings = {
      measureTimeEnabled,
      measureTime,
      dailyTipEnabled,
      dailyTipTime,
      lineNotify,
      surveyNotify
    };
    console.log("提醒設定：", settings);
    alert("提醒設定已儲存！");
  };

  return (
    <div className="container">
      <h1>提醒設定</h1>

      <div className="setting-row">
        <label>測量時間提醒設定</label>
        <div className="time-wrapper">
          <div className="time-display" onClick={() => openModal('measure')}>{measureTime}</div>
          <label className="switch">
            <input type="checkbox" checked={measureTimeEnabled} onChange={() => setMeasureTimeEnabled(!measureTimeEnabled)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="setting-row">
        <label>每日建議提醒設定</label>
        <div className="time-wrapper">
          <div className="time-display" onClick={() => openModal('daily')}>{dailyTipTime}</div>
          <label className="switch">
            <input type="checkbox" checked={dailyTipEnabled} onChange={() => setDailyTipEnabled(!dailyTipEnabled)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="setting-row">
        <label>Line訊息通知開啟</label>
        <label className="switch">
          <input type="checkbox" checked={lineNotify} onChange={() => setLineNotify(!lineNotify)} />
          <span className="slider"></span>
        </label>
      </div>

      <div className="setting-row">
        <label>問卷填寫通知開啟</label>
        <label className="switch">
          <input type="checkbox" checked={surveyNotify} onChange={() => setSurveyNotify(!surveyNotify)} />
          <span className="slider"></span>
        </label>
      </div>

      <button onClick={confirmSettings}>確認</button>

      {showModal && (
        <>
          <div className="modal active">
            <div className="modal-content">
              <h2>選擇時間</h2>
              <input type="time" value={tempTime} onChange={(e) => setTempTime(e.target.value)} />
              <div className="modal-buttons">
                <button onClick={() => setShowModal(false)}>取消</button>
                <button onClick={saveTime}>儲存</button>
              </div>
            </div>
          </div>
          <div className="overlay active" onClick={() => setShowModal(false)}></div>
        </>
      )}
    </div>
  );
}

export default ReminderSetting;
