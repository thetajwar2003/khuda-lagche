import Image from "next/image";
import React from "react";
import { FaUserPlus } from "react-icons/fa"; // Import the icon from react-icons

interface AuthorProps {
  image: string;
  name: string;
  location: string;
  followers: number;
  recipes: number;
  bio: string;
}

export default function Author({
  image,
  name,
  location,
  followers,
  recipes,
  bio,
}: AuthorProps) {
  const handleFollow = () => {
    // logic to follow user
    console.log("follow");
  };

  return (
    <div className="rounded-lg shadow-lg p-6 border-2 border-secondary">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Recipe Submitted By
      </h2>
      <div className="flex items-center">
        <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-white">
          <Image
            src={image} // Replace with actual image path
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-accent">{name}</h3>
          <p className="text-neutral">{location}</p>
        </div>
      </div>
      <div className="mt-4">
        <button
          onClick={handleFollow}
          className="text-white bg-accent hover:bg-accent-light py-2 px-4 rounded flex items-center"
        >
          <FaUserPlus className="w-5 h-5 mr-2" /> Follow Me
        </button>
        <div className="flex mt-4 text-white">
          <div className="mr-6">
            <p className="text-lg font-bold">{followers}</p>
            <p className="text-sm">Followers</p>
          </div>
          <div className="mr-6">
            <p className="text-lg font-bold">{recipes}</p>
            <p className="text-sm">Recipes</p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-300">
        <p>{bio}</p>
        <p className="text-accent mt-2 cursor-pointer">View Full Profile</p>
      </div>
    </div>
  );
}
