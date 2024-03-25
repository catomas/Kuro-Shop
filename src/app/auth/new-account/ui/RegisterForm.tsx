"use client";

import { login, registerUser } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
  name: string;
};

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    setErrorMessage("");
    const { email, password, name } = data;

    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    }

    const loginResp = await login(email.toLowerCase(), password);

    if (!loginResp.ok) {
      setErrorMessage(loginResp.message);
      return;
    }

    // Redirigir al usuario

    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      {/* {errors.name && <p className="text-red-500">El nombre es obligatorio</p>} */}

      <label htmlFor="name">Nombre completo </label>
      <input
        {...register("name", { required: true })}
        autoFocus
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.name,
        })}
        type="text"
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.email,
        })}
        type="email"
      />

      <label htmlFor="password">Contraseña</label>
      <input
        {...register("password", { required: true, minLength: 6 })}
        className={clsx("px-5 py-2 border bg-gray-200 rounded mb-5", {
          "border-red-500": errors.password,
        })}
        type="password"
      />
      {<span className="text-red-500">{errorMessage}</span>}

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Iniciar sesión
      </Link>
    </form>
  );
};
