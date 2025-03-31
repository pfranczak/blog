import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Avatar() {
  return (
    <Link href="/" className="flex items-center space-x-4">
      <Image
        src="https://media.graphassets.com/8xnH2wp3TPWBBO04thTH"
        alt="Przemek Franczak"
        width={56}
        height={56}
        className="rounded-full shadow-md"
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