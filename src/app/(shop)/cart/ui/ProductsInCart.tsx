"use client";

import { useCartStore } from "@/store";
import { ProductImage, QuantitySelector } from "@/components";
import { useEffect, useState } from "react";
import Link from "next/link";

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);

  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeFromCart = useCartStore((state) => state.removeFromCart);
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
              width={100}
              height={100}
              priority
              style={{
                width: "auto",
                height: "auto",
              }}
              className="mr-5 rounded"
            />
          </Link>

          <div>
            <Link
              className=" hover:underline cursor-pointer"
              href={`/product/${product.slug}`}
            >
              {product.size} - {product.title}
            </Link>
            <p>${product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChange={(quantity) =>
                updateProductQuantity(product, quantity)
              }
            />

            <button
              onClick={() => removeFromCart(product)}
              className="underline mt-3"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
