// components/VerticalDashedLine.jsx
import React from 'react';

const VerticalDashedLine = ({ height = 300, color = "#0a964e", dotPositions = [0, 0.33, 0.66, 1] }) => {
  return (
    <div className="relative" style={{ height: `${height}px` }}>
      {/* Dashed line */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2" 
        style={{
          height: '100%',
          width: '1px',
          backgroundImage: `linear-gradient(to bottom, ${color} 50%, transparent 50%)`,
          backgroundSize: '10px 10px',
        }}
      />
      
      {/* Dots */}
      {dotPositions.map((position, index) => (
        <div
          key={index}
          className="ring-2 ring-[#B2FF96] absolute left-1/2 transform -translate-x-1/2 w-[18px] h-[18px] rounded-full"
          style={{
            backgroundColor: color,
            top: `calc(${position * 100}% - 6px)`,
          }}
        />
      ))}
    </div>
  );
};

export default VerticalDashedLine;