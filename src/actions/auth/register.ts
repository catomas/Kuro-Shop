"use server";

import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    // Buscar el correo en la base de datos
    const user = await prisma.user.findUnique({
      where: {
        email: email.toLowerCase(),
      },
    });

    if (user) {
      return {
        ok: false,
        message: "El correo ya está en uso",
      };
    }

    // Encriptar la contraseña

    const hashedPassword = bcryptjs.hashSync(password);

    // Crear el usuario
    const newUser = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      ok: true,
      user: newUser,
      message: "Cuenta creada",
    };
  } catch (error) {
    return {
      ok: false,
      message: "Error al crear la cuenta",
    };
  }
};
