"use client";

import { useCartStore } from "@/store";
import { useEffect, useState } from "react";
import { currencyFormat } from "@/utils/currencyFormat";

export const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);
  const { itemsInCart, subTotal, taxes, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" grid grid-cols-2">
      <span>No. Productos</span>
      <span className=" text-right">
        {itemsInCart === 1 ? "1 producto" : `${itemsInCart} productos`}
      </span>

      <span>Subtotal</span>
      <span className=" text-right">{currencyFormat(subTotal)}</span>

      <span>Impuestos (15%)</span>
      <span className=" text-right">{currencyFormat(taxes)}</span>

      <span className="mt-5 text-2xl">Total:</span>
      <span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
    </div>
  );
};
