import React from "react";
import Link from "next/link";

export function Avatar() {
  return (
    <Link href="/" className="flex items-center space-x-4">
      <img
        src="https://media.graphassets.com/8xnH2wp3TPWBBO04thTH"
        alt="Przemek Franczak"
        className="rounded-full w-14 h-14 shadow-md"
      />
      <div>
        <span className="text-xl font-semibold title hidden md:block">
          Przemek Franczak
        </span>
        <div className="hidden md:block">
          <p className="text-sm dark:text-gray-400">Frontend Software Engineer @
            <span className="text-blue-800"> Volt.io</span>
          </p>
        </div>
      </div>
    </Link>
  );
}