import Image from "next/image";
import React from "react";

interface HeroProps {
  image: string;
  title: string;
  description: string;
  cookingTime: string;
}

export default function Hero({
  image,
  title,
  description,
  cookingTime,
}: HeroProps) {
  return (
    <>
      <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
        {/* 3:2 aspect ratio */}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-4xl font-bold text-white mt-6">{title}</h1>
      <p className="text-lg text-gray-300 mt-2">{description}</p>
      <div className="mt-4">
        <p className="text-lg text-white">
          <strong>Cooking Time:</strong> {cookingTime}
        </p>
      </div>
    </>
  );
}
