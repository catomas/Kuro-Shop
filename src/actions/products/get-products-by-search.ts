"use server";
import { Product } from "@/interfaces";
import prisma from "@/lib/prisma";

export const getProductsBySearch = async (search: string) => {
  const productsTags = await prisma.product.findMany({
    include: {
      ProductImage: true,
    },
  });

  const filteredProducts = productsTags.filter((product) => {
    return Object.values(product.tags).some((tag) =>
      tag.toLowerCase().includes(search.toLowerCase())
    );
  });

  const products = await prisma.product.findMany({
    include: {
      ProductImage: true,
    },
    where: {
      OR: [
        {
          title: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          principalCategory: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
        {
          SecondCategory: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
        },
      ],
    },
  });

  const productsWithImages = products.map((product) => ({
    ...product,
    images: product.ProductImage.map((image) => image.url),
  }));

  const filteredProductsWithImages = filteredProducts.map((product) => ({
    ...product,
    images: product.ProductImage.map((image) => image.url),
  }));

  const allProducts: Product[] = [
    ...productsWithImages,
    ...filteredProductsWithImages,
  ];

  const uniqueProducts: Product[] = Array.from(
    new Set(allProducts.map((product) => product.id))
  )
    .map((id) => allProducts.find((product) => product.id === id))
    .filter((product) => product !== undefined) as Product[];

  console.log(uniqueProducts);

  return uniqueProducts;
};
