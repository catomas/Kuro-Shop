"use server";

import { v2 as cloudinary } from "cloudinary";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
cloudinary.config(process.env.CLOUDINARY_URL ?? "");

export const deleteProductImage = async (imageId: number, imageUrl: string) => {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      error: "No se puede eliminar la imagen de FS",
    };
  }

  const urlSegments = imageUrl.split("/");
  const imageName = urlSegments.pop()?.split(".")[0] ?? "";
  const folderName = urlSegments.pop() ?? "";

  try {
    await cloudinary.uploader.destroy(
      `${folderName}/${imageName}` || `${imageName}`
    );
    const deletedImage = await prisma.productImage.delete({
      where: {
        id: imageId,
      },
      select: {
        product: {
          select: {
            slug: true,
          },
        },
      },
    });

    revalidatePath("/admin/products");
    revalidatePath(`/admin/product/${deletedImage.product.slug}`);
    revalidatePath(`/product/${deletedImage.product.slug}`);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: "Error al eliminar la imagen",
    };
  }
};
