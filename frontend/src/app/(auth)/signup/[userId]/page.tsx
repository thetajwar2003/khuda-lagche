"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AccountCreationValues = {
  username: string;
  userType: "chef" | "blogger";
  bio: string;
  profilePicture: FileList;
};

export default function CreateProfile() {
  const params = useParams();
  const userId = params.userId;

  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<string>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AccountCreationValues>();
  const onSubmit: SubmitHandler<AccountCreationValues> = (data) => {
    // TODO: Handle form submission
    console.log({ ...data, userId: userId });
    router.push("/");
  };

  const profilePicture = watch("profilePicture");

  // When the profile picture changes, update the preview
  useEffect(() => {
    if (profilePicture && profilePicture.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(profilePicture[0]);
    }
  }, [profilePicture]);

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Check if reader.result is a string before calling setSelectedImage
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen w-full flex mt-12 justify-center bg-primary p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl rounded-lg"
      >
        <h2 className="text-neutral text-6xl font-bold mb-6">
          Create an Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 text-neutral text-lg font-bold"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            {...register("username", { required: true })}
            placeholder="ratatouli_chef30"
            className="w-full p-2 rounded bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
          />
          {errors.username && (
            <p className="text-accent text-xs">Username is required.</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="profilePicture"
            className="block mb-2 text-neutral text-lg font-bold"
          >
            Profile Picture
          </label>
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            {...register("profilePicture")}
            onChange={onImageChange}
            className="w-full p-2 rounded border border-accent text-neutral"
          />
          {selectedImage && (
            <div className="mt-4">
              <Image
                src={selectedImage as string}
                alt="Profile picture preview"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <span className="block mb-2 text-neutral text-lg font-bold">
            I am a...
          </span>
          <label className="inline-flex items-center">
            <input
              {...register("userType")}
              type="radio"
              value="chef"
              className="form-radio text-accent"
            />
            <span className="ml-2 text-neutral">Chef</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              {...register("userType")}
              type="radio"
              value="blogger"
              className="form-radio text-accent"
            />
            <span className="ml-2 text-neutral">Blogger</span>
          </label>
        </div>

        <div className="mb-6">
          <label
            htmlFor="bio"
            className="block mb-2 text-neutral text-lg font-bold"
          >
            Short Bio
          </label>
          <textarea
            id="bio"
            {...register("bio", { required: true })}
            className="w-full p-2 rounded bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
            placeholder="A short bio about yourself"
          ></textarea>
          {errors.bio && (
            <p className="text-accent text-xs">Bio is required.</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded bg-accent text-neutral font-bold hover:bg-pink-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
