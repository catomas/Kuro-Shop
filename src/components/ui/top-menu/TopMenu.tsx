"use client";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUiStore } from "@/store";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MaxWidthWrapper } from "../max-width-wrapper/MaxWidthWrapper";
import { useEffect, useState } from "react";

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className=" sticky top-0 z-10 w-full  bg-white/90 backdrop-blur-lg bg-white ">
      <div className="flex px-5 justify-between items-center w-full mx-auto max-w-screen-2xl">
        {/* Logo */}
        <div>
          <Link href="/">
            <span className={` ${titleFont.className} antialiased font-bold`}>
              Kuro
            </span>
            <span> | Shop </span>
          </Link>
        </div>

        {/* //TODO: Add the following code to the component */}
        {/* Center Menu */}
        <div className=" hidden sm:block">
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/category/men"
          >
            Hombres
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/category/women"
          >
            Mujeres
          </Link>
          <Link
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            href="/category/poster"
          >
            Posters
          </Link>
        </div>

        {/* Search, cart, menu */}
        <div className="flex items-center">
          <Link href="/search" className="mx-2">
            <IoSearchOutline className="w-5 h-5" />
          </Link>
          <Link
            href={totalItemsInCart === 0 && loaded ? "/empty" : "/cart"}
            className="mx-2"
          >
            <div className=" relative">
              {loaded && totalItemsInCart > 0 && (
                <span className=" fade-in absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                  {totalItemsInCart}
                </span>
              )}

              <IoCartOutline className="w-5 h-5" />
            </div>
          </Link>

          <button
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
            onClick={() => openMenu()}
          >
            Menú
          </button>
        </div>
      </div>
    </div>
  );
};
