"use client";

import { useCartStore } from "@/store";

import Link from "next/link";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";
import { ProductImage } from "@/components";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);

  const productInCart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {productInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className="flex mb-5">
          <Link href={`/product/${product.slug}`}>
            <ProductImage
              src={product.image}
              alt={product.title}
              priority
              width={100}
              height={100}
              style={{
                width: "auto",
                height: "auto",
              }}
              className="mr-5 rounded"
            />
          </Link>

          <div>
            <span>
              {product.size} - {product.title} ({product.quantity})
            </span>
            <p className="font-bold">
              {currencyFormat(product.price * product.quantity)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
