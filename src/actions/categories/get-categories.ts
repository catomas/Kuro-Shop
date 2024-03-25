"use server";
import prisma from "@/lib/prisma";

export const getCategories = async () => {
  try {
    const principalCategories = await prisma.principalCategory.findMany({
      orderBy: { name: "asc" },
    });
    const secondaryCategories = await prisma.secondCategory.findMany({
      orderBy: { name: "asc" },
    });

    return { principalCategories, secondaryCategories };
  } catch (error) {
    console.log(error);
    return { principalCategories: [], secondaryCategories: [] };
  }
};
