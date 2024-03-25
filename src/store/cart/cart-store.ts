import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;
  getSummaryInformation: () => {
    subTotal: number;
    taxes: number;
    total: number;
    itemsInCart: number;
  };

  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeFromCart: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );
        const taxes = subTotal * 0.15;
        const total = subTotal + taxes;
        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );

        return {
          subTotal,
          taxes,
          total,
          itemsInCart,
        };
      },

      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // 1. revisar si el producto ya esta en el carrito
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // 2. si el producto ya esta en el carrito, aumentar la cantidad
        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCart });
      },

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updatedCart = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...item,
              quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCart });
      },

      removeFromCart: (product: CartProduct) => {
        const { cart } = get();

        const updatedCart = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        set({ cart: updatedCart });
      },

      clearCart: () => {
        set({ cart: [] });
      },
    }),
    { name: "cart" }
  )
);
