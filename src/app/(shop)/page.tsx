export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { ProductGrid, Title, Pagination } from "@/components";
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
    <div className="px-2.5 md:px-0">
      <Title title="Tienda" subtitle="Todos los productos" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
