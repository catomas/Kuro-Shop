import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";

interface OrderStatusProps {
  isPaid: boolean;
}

export const OrderStatus = ({ isPaid }: OrderStatusProps) => {
  return (
    <div
      className={clsx(
        "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
        {
          "bg-red-500": !isPaid,
          "bg-green-700": isPaid,
        }
      )}
    >
      <IoCartOutline size={30} />
      {isPaid ? (
        <span className="mx-2">Pagado</span>
      ) : (
        <span className="mx-2">Pendiente de pago</span>
      )}
    </div>
  );
};
