import React from 'react';

const TimerControls = ({ isRunning, isPaused, handleStart, handlePause, handleStop, inputTime }) => {
  return (
    <div className="actions">
      <button onClick={handleStart} disabled={isRunning || !inputTime}>
        Старт
      </button>
      <button onClick={handlePause} disabled={!isRunning}>
        {isPaused ? 'Продолжить' : 'Пауза'}
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Стоп
      </button>
    </div>
  );
};

export default TimerControls;