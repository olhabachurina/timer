import React, { useState, useEffect } from 'react';
import './App.css';
import TimerCircle from './TimerCircle';
import TimeDisplay from './TimeDisplay';
import TimerControls from './TimerControls';

function App() {
  const [time, setTime] = useState(0); // Текущее время (секунды)
  const [inputTime, setInputTime] = useState(''); // Ввод пользователем
  const [isRunning, setIsRunning] = useState(false); // Таймер идет
  const [isPaused, setIsPaused] = useState(false); // Таймер на паузе
  const [initialTime, setInitialTime] = useState(0); // Начальное время

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
  };

  const handleStart = () => {
    if (inputTime && !isRunning) {
      const parsedTime = Number(inputTime);
      setTime(parsedTime);
      setInitialTime(parsedTime); 
      setIsRunning(true);
      setIsPaused(false);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      setIsPaused(!isPaused); 
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setInputTime('');
    setInitialTime(0);
  };

  useEffect(() => {
    let timer;
    if (isRunning && !isPaused && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      setIsRunning(false); 
    }
    return () => clearInterval(timer); 
  }, [isRunning, isPaused, time]);

  return (
    <div className="App">
      <TimerCircle time={time} initialTime={initialTime} />

      <TimeDisplay time={time} />

      <input
        type="number"
        value={inputTime}
        onChange={handleInputChange}
        placeholder="Введите количество секунд"
        disabled={isRunning} 
      />

      <TimerControls
        isRunning={isRunning}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleStop={handleStop}
        inputTime={inputTime}
      />
    </div>
  );
}

export default App;