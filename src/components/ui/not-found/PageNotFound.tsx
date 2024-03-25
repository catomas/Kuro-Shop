import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col  h-[800px] w-full justify-center items-center align-middle">
      <div className="px-5 mx-5">
        <Image
          src="/imgs/not-found.png"
          alt="not-found"
          width={550}
          height={550}
          className="p-5 sm:p-0"
        />
      </div>
      <div className=" text-center px-5 mx-5 ">
        <p className={` ${titleFont.className} font-semibold text-xl"`}>
          Whoops! Lo sentimos mucho.
        </p>
        <p className=" font-light">
          <span>Pagina no encontrada, regresar al </span>
          <Link href="/" className=" font-bold hover:underline transition-all">
            Inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
