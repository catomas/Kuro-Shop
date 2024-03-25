"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
}

export const getPaginatedUsers = async ({
  page = 1,
  take = 12,
}: PaginationOptions) => {
  if (isNaN(page)) page = 1;
  if (page < 1) page = 1;
  if (isNaN(take)) take = 12;
  if (take < 1) take = 12;

  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    return {
      ok: false,
      message: "No tienes permisos para realizar esta acción",
    };
  }
  const users = await prisma.user.findMany({
    take: take,
    skip: (page - 1) * take,
    orderBy: {
      name: "asc",
    },
  });

  const totalCount = await prisma.user.count();

  if (!users) {
    return {
      ok: false,
      message: "No se encontraron usuarios",
    };
  }

  const totalPages = Math.ceil(totalCount / take);

  return {
    ok: true,
    users,
    totalPages,
    currentPage: page,
  };
};
