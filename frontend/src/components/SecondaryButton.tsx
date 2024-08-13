import React from "react";

interface SecondaryButtonProps {
  body: any;
  customClass?: string;
  onClick?: () => void;
}

export default function SecondaryButton({
  body,
  customClass = "",
  onClick = () => {},
}: SecondaryButtonProps) {
  return (
    <button
      className={`text-white bg-accent hover:text-gray-300 border-0 p-3 focus:outline-none hover:bg-accent rounded text-lg ${customClass}`}
      onClick={onClick}
    >
      {body}
    </button>
  );
}
