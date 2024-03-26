export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title, Pagination } from "@/components";
import Image from "next/image";
import { redirect } from "next/navigation";

interface HomeProps {
  searchParams: {
    page: string;
  };
}

export default async function Home({ searchParams }: HomeProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <Image
        src="/imgs/home-banner.jpg"
        alt="Banner"
        priority
        style={{
          width: "100%",
        }}
        width={1200}
        height={1200}
      />
      <div className="px-2.5 md:px-32">
        <Title title="Kuro" subtitle="Todos los productos" className="mb-2" />

        <ProductGrid products={products} />
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
