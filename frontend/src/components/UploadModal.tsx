"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function UploadModal() {
  const [file, setFile] = useState<File | null>(null);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
    console.log(file);
  };
  return (
    <div className="flex items-center justify-center w-full ">
      <label className="flex flex-col items-center justify-center w-2/3 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
        <div className="flex flex-col items-center justify-center m-6">
          {file ? (
            <>
              <Image
                src={URL.createObjectURL(file)}
                width={200}
                height={200}
                alt="image uploaded"
              />
              <p className="m-2 text-sm text-gray-500 dark:text-gray-400">
                {file.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {Math.ceil(file.size / 1000)} KB
              </p>
            </>
          ) : (
            <>
              <FaUpload />
              <p className="m-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, or JPEG
              </p>
            </>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={uploadFile}
        />
      </label>
    </div>
  );
}
