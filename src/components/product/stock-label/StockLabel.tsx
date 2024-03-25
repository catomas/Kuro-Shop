"use client";

import { getStockBySlug } from "@/actions/products/get-stock-by-slug";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";

interface StockLabelProps {
  slug: string;
}

export const StockLabel = ({ slug }: StockLabelProps) => {
  const [stock, setStock] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const inStock = await getStockBySlug(slug);
      setStock(inStock);
      setLoading(false);
    };

    getStock();
  }, [slug]);

  return (
    <>
      {loading ? (
        <h1
          className={`${titleFont.className} antialiased font-bold animate-pulse bg-gray-200`}
        >
          &nbsp;
        </h1>
      ) : (
        <h1 className={`${titleFont.className} antialiased font-bold`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
