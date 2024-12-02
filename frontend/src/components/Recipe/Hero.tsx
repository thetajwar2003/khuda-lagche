import Image from "next/image";
import React from "react";
import { isValidUrl } from "../../../utils/validUrl";

interface HeroProps {
  images: string;
  name: string;
  description: string;
  total_time: string;
}

export default function Hero({
  images,
  name,
  description,
  total_time,
}: HeroProps) {
  return (
    <>
      <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
        {/* 3:2 aspect ratio */}
        <Image
          src={isValidUrl(images) ? images : "https://picsum.photos/720/400"}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-4xl font-bold text-white mt-6">{name}</h1>
      <p className="text-lg text-gray-300 mt-2">{description}</p>
      <div className="mt-4">
        <p className="text-lg text-white">
          <strong>Cooking Time:</strong> {total_time}
        </p>
      </div>
    </>
  );
}
