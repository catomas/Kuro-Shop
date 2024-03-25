export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Title, ProductGrid, Pagination } from "@/components";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    name: string;
  };
  searchParams: {
    page: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { name } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages, category } =
    await getPaginatedProductsWithImages({ page, category: name });

  if (!category) {
    notFound();
  }

  if (!products.length) {
    notFound();
  }

  return (
    <div className="px-2.5 md:px-0">
      <Title
        title={category.label || category.name || "Productos"}
        subtitle="Todos los productos"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
