import React from 'react';

const TimerCircle = ({ time, initialTime }) => {
  const radius = 125; 
  const circleDashArray = 2 * Math.PI * radius; 
  const circleDashOffset =
    initialTime > 0
      ? circleDashArray * (1 - time / initialTime)
      : circleDashArray;

  const remainingHours = Math.floor(time / 3600);
  const remainingMinutes = Math.floor((time % 3600) / 60);
  const remainingSeconds = time % 60;

  const secondAngle = remainingSeconds * 6 + 90; 
  const minuteAngle = (remainingMinutes + remainingSeconds / 60) * 6 + 90; 
  const hourAngle = (remainingHours % 12 + remainingMinutes / 60 + remainingSeconds / 3600) * 30 - 90; 

  return (
    <div className="timer-circle">
      <svg className="timer-svg" width="300" height="300">
        <circle
          className="circle-bg"
          cx="150"
          cy="150"
          r={radius}
          strokeWidth="12"
          fill="none"
          stroke="#333"
        />
        <circle
          className="circle-progress"
          cx="150"
          cy="150"
          r={radius}
          strokeWidth="12"
          fill="none"
          stroke="#ff9f00"
          strokeLinecap="round"
          transform="rotate(-90 150 150)"
          style={{
            strokeDasharray: circleDashArray,
            strokeDashoffset: circleDashOffset,
            transition: 'stroke-dashoffset 1s linear',
          }}
        />
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="100"
          stroke="#000"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${hourAngle} 150 150)`} 
        />
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="80"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${minuteAngle} 150 150)`} 
        />
        <line
          x1="150"
          y1="150"
          x2="150"
          y2="60"
          stroke="#ff0000"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${secondAngle} 150 150)`} 
        />
      </svg>
    </div>
  );
};

export default TimerCircle;