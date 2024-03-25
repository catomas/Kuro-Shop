export const revalidate = 604800; // 7 dias

import { getProductBySlug } from "@/actions";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { ResolvingMetadata, Metadata } from "next";
import { notFound } from "next/navigation";
import { AddToCart } from "./ui/AddToCart";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: ProductPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await await getProductBySlug(slug);

  // optionally access and extend (rather than replace) parent metadata
  //onst previousImages = (await parent).openGraph?.images || [];

  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "",
      images: [`/products/${product?.images[0]}`],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className=" md:mt-5 mb-20 grid md:grid-cols-3 gap-3">
      {/* Slideshow */}

      <div className="col-span-1 md:col-span-2">
        {/* Mobile Slideshow */}
        <ProductMobileSlideshow
          className="block md:hidden"
          images={product.images}
          title={product.title}
        />
        {/* Desktop Slideshow */}
        <ProductSlideshow
          className="hidden md:flex"
          images={product.images}
          title={product.title}
        />
      </div>

      {/* Product Info */}
      <div className="col-span-1 px-5 ">
        <StockLabel slug={slug} />

        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">${product.price}</p>

        <AddToCart product={product} />

        {/* Descripcion */}
        <h3 className=" font-bold text-sm">Descripción</h3>
        <p className=" h-full text-sm font-light">{product.description}</p>
      </div>
    </div>
  );
}
