import React from "react";

interface DotIndicatorProps {
  active: boolean;
  onClick: () => void;
}

const DotIndicator = ({ active, onClick }: DotIndicatorProps) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`inline-block w-4 h-4 mx-2 rounded-full bg-gray-500 ${
      active ? "bg-white" : ""
    }`}
  ></a>
);

export default DotIndicator;
