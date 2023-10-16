// components/Button.tsx
import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

function Button({ onClick, label }: ButtonProps) {
  return (
    <button
      className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded w-full my-4"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
