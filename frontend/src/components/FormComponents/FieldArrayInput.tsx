import React from "react";
import { useFieldArray, UseFormRegister } from "react-hook-form";
import { RecipeFormValues } from "@/types/RecipeFormValues";

interface FieldArrayInputProps {
  label: string;
  name: "ingredients" | "directions";
  register: UseFormRegister<RecipeFormValues>;
  control: any;
  values: string[];
  setValues: React.Dispatch<React.SetStateAction<RecipeFormValues>>;
}

export default function FieldArrayInput({
  label,
  name,
  register,
  control,
  values,
  setValues,
}: FieldArrayInputProps) {
  const { fields, append } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="mb-4">
      <label className="block text-lg font-bold text-white mb-2">{label}</label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center mb-2">
          <input
            type="text"
            {...register(`${name}.${index}` as const, { required: true })}
            placeholder={label}
            className="w-full p-2 rounded bg-gray-700 border border-accent text-white"
            onChange={(e) => {
              const newValues = [...values];
              newValues[index] = e.target.value;
              setValues((prev) => ({
                ...prev,
                [name]: newValues,
              }));
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => append("")}
        className="mt-2 text-white bg-accent hover:bg-accent-light py-2 px-4 rounded"
      >
        Add {label}
      </button>
    </div>
  );
}
