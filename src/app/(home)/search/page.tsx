import { getProductsBySearch } from "@/actions/products/get-products-by-search";
import { SearchBar, SearchContent } from "@/components";

export default async function SearchPage() {
  const recommendedProducts = await getProductsBySearch("hoodie");

  return (
    <div className=" min-h-96   ">
      <SearchContent recommendedProducts={recommendedProducts} />
    </div>
  );
}
