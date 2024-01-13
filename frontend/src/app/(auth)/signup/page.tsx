"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";

type SignUpValues = {
  email: string;
  username: string;
  password: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignUpValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpValues> = (data) => {
    console.log(data);
    router.push(`/signup/randomUserID`);
    // Here you would usually send data to the server
  };
  return (
    <div className="min-h-screen bg-primary text-neutral flex">
      <div className="w-1/2 border-r border-contrast p-5 flex flex-col ">
        <div className="mt-60">
          <blockquote className="italic text-accent">
            “I don't want to look back and think{" "}
            <b>'I could have eaten that.'</b> ”
          </blockquote>
          <p className="mt-4 text-secondary">~ Someone Hungry</p>
        </div>
        <div>{/* Empty div for spacing */}</div>
      </div>
      <div className="w-1/2 p-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-end mb-12">
            <Link
              href={"/login"}
              className="text-secondary hover:text-accent transition-colors"
            >
              Login
            </Link>
          </div>
          <h2 className="text-4xl font-bold text-accent mb-6">
            Create an account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 mt-1 rounded-md bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                placeholder="gordonRamsey@gmail.com"
              />
              {errors.email && (
                <p className="text-accent text-xs mt-1">Email is required.</p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/,
                    message:
                      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
                className="w-full px-3 py-2 mt-1 rounded-md bg-primary border border-accent text-neutral placeholder-gray-500 focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"
                placeholder="firePassword123!"
              />
              {errors.password && (
                <p className="text-accent text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Add other form inputs here, styled similarly */}

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-accent text-white font-bold hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-t border-contrast" />
            <span className="mx-4 text-neutral">OR CONTINUE WITH</span>
            <hr className="flex-grow border-t border-contrast" />
          </div>
          <button className="w-full py-2 px-4 bg-accent rounded text-white font-bold mb-6 hover:bg-pink-700 transition-colors flex items-center justify-center">
            <FaGoogle className="mr-2" />
            Google
          </button>
          <p className="text-xs text-neutral">
            By clicking continue, you agree to our{" "}
            <a href="#" className="text-accent">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-accent">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div>{/* Empty div for spacing */}</div>
      </div>
    </div>
  );
}
