import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextInput({
  label,
  value,
  name,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-bold text-white mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 rounded bg-gray-700 border border-accent text-white"
      />
    </div>
  );
}
