import React from "react";

interface NutritionalInfoProps {
  nutritionalInfo: {
    calories: string;
    fat: string;
    carbohydrates: string;
    protein: string;
    sodium: string;
  };
}

export default function NutritionalInfo({
  nutritionalInfo,
}: NutritionalInfoProps) {
  return (
    <div className="mt-4 text-white">
      <p>Calories: {nutritionalInfo.calories} calories</p>
      <p>Fat: {nutritionalInfo.fat}</p>
      <p>Carbohydrates: {nutritionalInfo.carbohydrates}</p>
      <p>Protein: {nutritionalInfo.protein}</p>
      <p>Sodium: {nutritionalInfo.sodium}</p>
    </div>
  );
}
