import React, { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    const categories = [{
        name: 'react',
        slug: 'react'
    }, {
        name: 'javascript',
        slug: 'javascript'
    }, {
        name: 'typescript',
        slug: 'typescript'
    }];

    return (
        <div className="container mx-auto px-10 my-8 flex justify-between">
            <Link href="/">
                <div className="flex cursor-pointer text-white">
                        <Image className="rounded-full" src="https://media.graphassets.com/8xnH2wp3TPWBBO04thTH" alt="Author's portrait" width="50" height="50"/>
                        <div className="ml-1.5">
                            <h1 className="font-bold text-lg title">Przemek Franczak</h1>
                            <h2 className="text-sm">Software Engineer</h2>
                        </div>
                </div>
            </Link>
            <div className="hidden md:block">
                {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                        <span className="title md:float-right align-middle text-white ml-8 font-semibold cursor-pointer">
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Header;
