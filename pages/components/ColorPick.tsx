import React from 'react';

interface ColorPickProps {
  color: string;
  onClick: () => void;
}

const ColorPick = ({ color, onClick }: ColorPickProps) => {
  return (
    <div
      className="w-6 h-6 rounded-full cursor-pointer border-2"
      style={{ backgroundColor: color }}
      onClick={onClick}
    ></div>
  );
};

export default ColorPick;