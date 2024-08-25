"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type AccountCreationValues = {
  email: string;
  password: string;
};

export default function CreateProfile() {
  const params = useParams();
  const userId = params.userId;

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<AccountCreationValues>();

  const onSubmit: SubmitHandler<AccountCreationValues> = (data) => {
    // TODO: Handle form submission
    console.log({ ...data, userId: userId });
    router.push("/");
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-primary p-5 mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl rounded-lg"
      >
        <h2 className="text-neutral text-6xl font-bold mb-6">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-neutral text-lg font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="gordonRamsey@gmail.com"
            className="w-full p-2 rounded bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
          />
          {errors.email && (
            <p className="text-accent text-xs">Email is required.</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-neutral text-lg font-bold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="firePassword123!"
            className="w-full p-2 rounded bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
          />
          {errors.password && (
            <p className="text-accent text-xs">Password is required.</p>
          )}
        </div>

        <div className="text-left mb-4">
          <Link
            href="/forgot-password"
            className="text-secondary text-sm hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded bg-accent text-neutral font-bold hover:bg-pink-700 transition-colors mb-4"
        >
          Login
        </button>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-neutral mb-2">Don't have an account?</p>
          <Link
            href="/signup"
            className="inline-block text-secondary bg-primary border border-secondary py-2 px-4 rounded hover:bg-secondary hover:text-white transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
