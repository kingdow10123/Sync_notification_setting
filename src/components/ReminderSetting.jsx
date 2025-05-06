import React, { useState } from 'react';
import './ReminderSetting.css';

function ReminderSetting() {
  const [time1, setTime1] = useState('尚未設定');
  const [time2, setTime2] = useState('尚未設定');
  const [showModal, setShowModal] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(null);
  const [tempTime, setTempTime] = useState('');

  const [timeToggle1, setTimeToggle1] = useState(false);
  const [timeToggle2, setTimeToggle2] = useState(false);
  const [lineNotify, setLineNotify] = useState(false);
  const [surveyNotify, setSurveyNotify] = useState(false);

  const openModal = (target) => {
    setCurrentTarget(target);
    setTempTime(target === 'time1' ? time1 : time2);
    setShowModal(true);
  };

  const saveTime = () => {
    if (currentTarget === 'time1') setTime1(tempTime);
    if (currentTarget === 'time2') setTime2(tempTime);
    setShowModal(false);
  };

  const confirm = () => {
    const settings = {
      measureTimeEnabled: timeToggle1,
      measureTime: time1,
      dailyTipEnabled: timeToggle2,
      dailyTipTime: time2,
      lineNotify,
      surveyNotify,
    };
    console.log('提醒設定：', settings);
    alert('提醒設定已儲存！');
  };

  return (
    <div className="container">
      <h1>提醒設定</h1>

      <div className="setting-row">
        <label>測量時間提醒設定</label>
        <div className="time-wrapper">
          <div className="time-display" onClick={() => openModal('time1')}>
            {time1}
          </div>
          <label className="switch">
            <input type="checkbox" checked={timeToggle1} onChange={() => setTimeToggle1(!timeToggle1)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      <div className="setting-row">
        <label>每日建議提醒設定</label>
        <div className="time-wrapper">
          <div className="time-display" onClick={() => openModal('time2')}>
            {time2}
          </div>
          <label className="switch">
            <input type="checkbox" checked={timeToggle2} onChange={() => setTimeToggle2(!timeToggle2)} />
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

      <button onClick={confirm}>確認</button>

      {/* Modal */}
      {showModal && (
        <>
          <div className="overlay" onClick={() => setShowModal(false)}></div>
          <div className="modal">
            <div className="modal-content">
              <h2>選擇時間</h2>
              <input
                type="time"
                value={tempTime.includes(':') ? tempTime : ''}
                onChange={(e) => setTempTime(e.target.value)}
              />
              <div className="modal-buttons">
                <button onClick={() => setShowModal(false)}>取消</button>
                <button onClick={saveTime}>儲存</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ReminderSetting;
