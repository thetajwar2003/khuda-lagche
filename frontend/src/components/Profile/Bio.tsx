import Image from "next/image";
import React from "react";

interface BioProps {
  pfp: string;
  name: string;
  location: string;
  followers: number;
  recipeCount: number;
  bio: string;
}

export default function Bio({
  pfp,
  name,
  location,
  followers,
  recipeCount,
  bio,
}: BioProps) {
  return (
    <>
      <div className="flex items-center">
        <div className="w-24 h-24 relative rounded-full overflow-hidden border-2 border-white">
          <Image src={pfp} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="ml-6">
          <h1 className="text-3xl font-semibold text-accent">{name}</h1>
          <div className="flex items-center text-neutral mt-2">
            <p>{location}</p>
          </div>
          <div className="flex mt-4">
            <div className="text-neutral text-lg mb-4">
              <span>{recipeCount} Posts</span>
              <span className="mx-2">•</span>
              <span>{followers} Followers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-300">
        <p>{bio}</p>
      </div>
    </>
  );
}
