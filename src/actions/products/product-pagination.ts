"use server";
import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  category?: string;
}

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  category,
}: PaginationOptions) => {
  if (isNaN(page)) page = 1;
  if (page < 1) page = 1;
  if (isNaN(take)) take = 12;
  if (take < 1) take = 12;

  try {
    // 1, Obtener los productos

    let principalCategory;

    if (category) {
      principalCategory = await prisma.principalCategory.findFirst({
        where: {
          name: category,
        },
      });
    }

    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        take: take,
        skip: (page - 1) * take,
        include: {
          ProductImage: {
            take: 2,
            select: {
              url: true,
            },
          },
          principalCategory: {
            select: {
              name: true,
            },
          },
        },
        where: {
          principalCategoryId: principalCategory?.id,
        },
      }),
      prisma.product.count({
        where: {
          principalCategoryId: principalCategory?.id,
        },
      }),
    ]);

    // 2, Obtener todas las paginas
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      category: principalCategory,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("No se pudo cargar los productos");
  }
};
