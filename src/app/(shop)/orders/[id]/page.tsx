import { getOrderById } from "@/actions";
import { OrderStatus, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { ProductsInOrder } from "../ui/ProductsInOrder";
import { OrderResumen } from "../ui/OrderResumen";
import { redirect } from "next/navigation";

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface OrdersPageProps {
  params: {
    id: string;
  };
}

export default async function OrderPage({ params }: OrdersPageProps) {
  const { id } = params;

  const res = await getOrderById(id);

  if (!res.ok || !res.order) {
    redirect("/");
  }

  const order = res.order;

  return (
    <div className="flex justify-center items-center mb-72  sm:px-0">
      <div className=" flex flex-col w-[1000px]">
        <Title title={`Orden #${id.split("-").at(-1)}`} />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}

          <div className="flex flex-col mt-5">
            <OrderStatus isPaid={order.resumen.isPaid} />
            {/* Items */}
            <ProductsInOrder orderProducts={order.productsOrder} />
          </div>

          {/* Checkout - Resumen */}
          <OrderResumen orderResumen={order.resumen} address={order.address} />
        </div>
      </div>
    </div>
  );
}
