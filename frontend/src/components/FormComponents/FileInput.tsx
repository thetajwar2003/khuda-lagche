import React from "react";

interface FileInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileInput({ label, name, onChange }: FileInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-bold text-white mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        className="w-full p-2 rounded bg-gray-700 border border-accent text-white"
        onChange={onChange}
      />
    </div>
  );
}
