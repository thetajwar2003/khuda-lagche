import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser, FaSearch, FaSignInAlt } from "react-icons/fa";
import logo from "../../public/khuda-lagche-logo.png";

export default function Header() {
  const user = true;
  return (
    <header className="text-gray-400 bg-accent body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <Image
            src={logo}
            height={48}
            width={48}
            alt="logo"
            className="rounded-full"
          />
          <span className="ml-3 text-xl">Khuda Lagche</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/recipe" className="mr-5 hover:text-gray-300 text-white">
            Recipes
          </Link>
          <Link
            href="/recipe?filter=popular"
            className="mr-5 hover:text-gray-300 text-white"
          >
            Popular
          </Link>
          <Link
            href="/recipe?filter=seasonal"
            className="mr-5 hover:text-gray-300 text-white"
          >
            Seasonal
          </Link>
        </nav>
        <Link
          href="/search"
          className="inline-flex items-center text-white border-0 p-3 focus:outline-none hover:text-gray-300 rounded text-base mt-4 md:mt-0"
        >
          <FaSearch />
        </Link>
        {user ? (
          <Link
            href="/profile"
            className="inline-flex items-center text-white border-0 p-3 focus:outline-none hover:text-gray-300 rounded text-base mt-4 md:mt-0"
          >
            <FaRegUser />
          </Link>
        ) : (
          <Link
            href="/signup"
            className="inline-flex items-center text-white border-0 p-3 focus:outline-none hover:text-gray-300 rounded text-base mt-4 md:mt-0"
          >
            <FaSignInAlt />
          </Link>
        )}
      </div>
    </header>
  );
}
