import { OrderStatus, PayPalButton } from "@/components";
import { Address, OrderResumen as OrderResumenInterface } from "@/interfaces";
import { currencyFormat } from "@/utils";
import React from "react";

interface ProductsInOrderProps {
  address: Address;
  orderResumen: OrderResumenInterface;
}

export const OrderResumen = ({
  address,
  orderResumen,
}: ProductsInOrderProps) => {
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
        <span className=" text-right">{orderResumen.itemsInOrder}</span>

        <span>Subtotal</span>
        <span className=" text-right">
          {currencyFormat(orderResumen.subTotal)}
        </span>

        <span>Impuestos (15%)</span>
        <span className=" text-right">{currencyFormat(orderResumen.tax)}</span>

        <span className="mt-5 text-2xl">Total:</span>
        <span className="mt-5 text-2xl text-right">
          {currencyFormat(orderResumen.total)}
        </span>
      </div>

      <div className="mt-5 mb-2 w-full">
        {orderResumen.isPaid ? (
          <OrderStatus isPaid={orderResumen.isPaid} />
        ) : (
          <PayPalButton orderId={orderResumen.id} amount={orderResumen.total} />
        )}
      </div>
    </div>
  );
};
