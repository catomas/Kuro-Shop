import { ProductImage } from "@/components";
import { OrderProduct } from "@/interfaces";
import { currencyFormat } from "@/utils";
import Link from "next/link";
import React from "react";

interface ProductsInOrderProps {
  orderProducts: OrderProduct[];
}

export const ProductsInOrder = ({ orderProducts }: ProductsInOrderProps) => {
  return (
    <>
      {orderProducts.map((product) => (
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
