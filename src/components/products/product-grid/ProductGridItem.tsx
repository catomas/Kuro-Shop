"use client";

import { ProductImage } from "@/components";
import { titleFont } from "@/config/fonts";
import { Product } from "@/interfaces";
import Link from "next/link";
import { useState } from "react";

interface ProductGridItemProps {
  product: Product;
}

export const ProductGridItem = ({ product }: ProductGridItemProps) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div>
      <Link
        href={`/product/${product.slug}`}
        className="mx-auto w-full h-full  flex flex-col justify-between  transform overflow-hidden rounded-lg bg-white  shadow-md duration-300 md:hover:scale-105 hover:shadow-lg"
      >
        <ProductImage
          width={500}
          height={500}
          className=" h-[160px] w-[150px] md:h-full md:w-full mx-auto object-cover object-center"
          src={displayImage}
          priority
          onMouseEnter={() =>
            setDisplayImage(product.images[1] || product.images[0])
          }
          onMouseLeave={() => setDisplayImage(product.images[0])}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className={`${titleFont.className} text-sm md:text-base`}>
            {product.title}
          </h2>
          <div className="flex items-center">
            <p className="mr-2 text-sm  md:text-lg  text-gray-500  ">
              ${product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
