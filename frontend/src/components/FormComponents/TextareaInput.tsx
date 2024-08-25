import React from "react";

interface TextareaInputProps {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaInput({
  label,
  value,
  name,
  placeholder,
  onChange,
}: TextareaInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-bold text-white mb-2">{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 rounded bg-gray-700 border border-accent text-white"
      />
    </div>
  );
}
