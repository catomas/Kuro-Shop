"use server";

import { auth } from "@/auth.config";
import { UserRole } from "@/interfaces";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const changeUserRole = async (userId: string, role: UserRole) => {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    return {
      ok: false,
      message: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    });

    if (!user) {
      return {
        ok: false,
        message: "No se encontró el usuario",
      };
    }

    revalidatePath("/admin/users");

    return {
      ok: true,
      message: "Rol de usuario actualizado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo actualizar el rol del usuario",
    };
  }
};
