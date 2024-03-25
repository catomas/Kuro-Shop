"use server";
import { auth } from "@/auth.config";
import { Address, OrderProduct, OrderResumen } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getOrderById = async (id: string) => {
  try {
    const session = await auth();
    const userId = session?.user.id;

    if (!userId) {
      return {
        ok: false,
        error: "Usuario no encontrado",
      };
    }

    const order = await prisma.order.findUnique({
      where: {
        id: id,
      },
      include: {
        OrderAddress: true,
      },
    });

    if (!order) {
      return {
        ok: false,
        error: "No se encontró la orden",
      };
    }

    if (!order.OrderAddress) {
      return {
        ok: false,
        error: "No se encontró la dirección de la orden",
      };
    }

    const productsOrderItems = await prisma.orderItem.findMany({
      where: {
        orderId: id,
      },
      include: {
        product: true,
      },
    });

    const productsImages = await prisma.productImage.findMany({
      where: {
        productId: {
          in: productsOrderItems.map((item) => item.productId),
        },
      },
    });

    const productsOrder: OrderProduct[] = productsOrderItems.map((item) => {
      const productImage = productsImages.find(
        (image) => image.productId === item.productId
      );

      return {
        slug: item.product.slug,
        id: item.productId,
        title: item.product.title,
        price: item.price,
        quantity: item.quantity,
        size: item.size,
        image: productImage?.url || "",
      };
    });

    const orderResumen: OrderResumen = {
      id: order.id,
      subTotal: order.subTotal,
      tax: order.tax,
      total: order.total,
      itemsInOrder: order.itemsInOrder,
      isPaid: order.isPaid,
    };

    const { countryId, ...restOrderAddress } = order.OrderAddress;

    if (session.user.role === "USER" && userId !== order.userId) {
      return {
        ok: false,
        error: "No tienes permisos para ver esta orden",
      };
    }

    return {
      ok: true,
      order: {
        resumen: orderResumen,
        productsOrder: productsOrder,
        address: {
          ...restOrderAddress,
          country: countryId,
        } as Address,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: "Error al obtener la orden",
    };
  }
};
