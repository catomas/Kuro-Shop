import prisma from "../lib/prisma";
import { initialData } from "./seed";
import { countries } from "./seed-countries";

async function main() {
  // Borra todos los datos de la base de datos

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();

  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.secondCategory.deleteMany();
  await prisma.principalCategory.deleteMany();

  const { categories, secondaryCategories, products, users } = initialData;

  // Countries
  await prisma.country.createMany({
    data: countries,
  });

  // Users
  await prisma.user.createMany({
    data: users,
  });

  // Categories

  const principalCategoriesData = categories.map((category) => ({
    name: category.name,
    label: category.label,
  }));

  await prisma.principalCategory.createMany({
    data: principalCategoriesData,
  });

  // Secondary Categories

  const secondaryCategoriesData = secondaryCategories.map((category) => ({
    name: category.name,
    label: category.label,
  }));

  await prisma.secondCategory.createMany({
    data: secondaryCategoriesData,
  });

  const categoriesDb = await prisma.principalCategory.findMany();

  const categoriesMap = categoriesDb.reduce((acc, category) => {
    acc[category.name.toLowerCase()] = category.id;
    return acc;
  }, {} as Record<string, string>);

  const secondaryCategoriesDb = await prisma.secondCategory.findMany();

  const secondaryCategoriesMap = secondaryCategoriesDb.reduce(
    (acc, category) => {
      acc[category.name.toLowerCase()] = category.id;
      return acc;
    },
    {} as Record<string, string>
  );

  // Products
  products.forEach(async (product) => {
    const { type, category, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,

        principalCategoryId: categoriesMap[category.toLowerCase()],
        secondCategoryId: secondaryCategoriesMap[type.toLowerCase()],
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });
}

(() => {
  if (process.env.NODE_ENV === "production") {
    return;
  }

  main();
})();
