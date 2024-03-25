"use client";

import { placeOrder } from "@/actions";
import { useAddressStore, useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PlaceOrder = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { itemsInCart, subTotal, taxes, total } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const address = useAddressStore((state) => state.address);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);

    const productsToOrder = cart.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
      size: product.size,
    }));

    console.log({ address, productsToOrder });

    const resp = await placeOrder(productsToOrder, address);

    if (!resp.ok) {
      setIsPlacingOrder(false);
      setErrorMessage(resp.message);
      return;
    }
    setIsPlacingOrder(false);
    clearCart();
    router.replace("/orders/" + resp.order?.id);
  };

  if (!loaded) {
    return <p>Cargando...</p>;
  }

  return (
    <div className=" bg-white rounded-xl shadow-xl p-7">
      <h2 className="text-2xl font-semibold mb-2">Dirección de entrega</h2>
      <div className="mb-10">
        <p className="text-xl">
          {address.firstName} {address.lastName}
        </p>
        <p>{address.address}</p>
        <p>{address.address2}</p>
        <p>{address.postalCode}</p>
        <p>
          {address.city} {address.country}
        </p>
        <p>{address.phone}</p>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

      <h2 className=" text-2xl font-semibold mb-2">Resumen de la orden</h2>
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
        <span className="mt-5 text-2xl text-right">
          {currencyFormat(total)}
        </span>
      </div>

      <div className="mt-5 mb-2 w-full">
        {/* Disclaimer */}
        <p className="mb-5">
          <span className="text-xs">
            Al hacer clic en &quot;Colocar orden&quot;, aceptas nuestras{" "}
            <a className="underline" href="#">
              Condiciones de uso
            </a>{" "}
            y nuestra{" "}
            <a href="#" className="underline">
              Política de privacidad
            </a>
            .
          </span>
        </p>

        <p className="text-red-500">{errorMessage}</p>

        <button
          disabled={isPlacingOrder}
          onClick={onPlaceOrder}
          className={clsx({
            "btn-primary": !isPlacingOrder,
            "btn-disabled": isPlacingOrder,
          })}
        >
          Colocar orden
        </button>
      </div>
    </div>
  );
};
