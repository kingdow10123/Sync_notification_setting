import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReminderSetting from './components/ReminderSetting.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReminderSetting />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
