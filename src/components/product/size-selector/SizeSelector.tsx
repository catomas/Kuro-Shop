import { Size } from "@/interfaces";
import clsx from "clsx";

interface SizeSelectorProps {
  selectedSize?: Size;
  availableSizes: Size[];

  onSizeChanged: (size: Size) => void;
}

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSizeChanged,
}: SizeSelectorProps) => {
  return (
    <div className="my-3">
      <h3 className="font-bold mb-4">Tallas Disponibles</h3>

      <div className=" flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeChanged(size)}
            className={clsx(" mr-2 text-sm", {
              "btn-primary": size === selectedSize,
              "btn-secondary": size !== selectedSize,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
