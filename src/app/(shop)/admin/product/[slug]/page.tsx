import { getCategories, getProductBySlug } from "@/actions";
import { Title } from "@/components";
import { redirect } from "next/navigation";
import { ProductForm } from "./ui/ProductForm";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await getProductBySlug(slug);
  const { principalCategories, secondaryCategories } = await getCategories();

  if (!product && slug !== "new") {
    redirect("/admin/products");
  }
  const title = slug === "new" ? "Nuevo Producto" : "Editar Producto";

  return (
    <>
      <Title title={title} />
      <ProductForm
        product={product ?? {}}
        principalCategories={principalCategories}
        secondaryCategories={secondaryCategories}
      />
    </>
  );
}
