"use client";

import { getProductsBySearch } from "@/actions/products/get-products-by-search";
import { MaxWidthWrapper, ProductGrid, SearchBar, Title } from "@/components";
import { Product } from "@/interfaces";
import { useCallback, useEffect, useRef, useState } from "react";

interface SearchBarProps {
  recommendedProducts: Product[];
}

export const SearchContent = ({ recommendedProducts }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [noSearchResults, setNoSearchResults] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const debounceRef = useRef("");

  const filterProducts = useCallback(async () => {
    if (!debounceRef.current.trim()) {
      setProducts([]);
      return;
    }

    const res = await getProductsBySearch(debounceRef.current);

    if (res.length === 0) {
      setNoSearchResults(true);
    } else {
      setNoSearchResults(false);
    }
    setProducts(res);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      debounceRef.current = searchTerm;
      filterProducts();
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, filterProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setNoSearchResults(false);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    filterProducts();
  };

  return (
    <>
      <div className="flex justify-center py-5">
        <SearchBar
          searchTerm={searchTerm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <MaxWidthWrapper className="mt-10">
        {products.length === 0 && searchTerm && noSearchResults && (
          <div className="flex flex-col items-center mt-10">
            <p className="text-lg text-red-500 font-bold">
              No se encontraron resultados para &quot;{searchTerm}&quot;
            </p>
            <Title title="Aquí hay algunas recomendaciones para ti" />
            <ProductGrid products={recommendedProducts} />
          </div>
        )}
        {products.length > 0 && (
          <>
            <Title
              className="text-2xl font-bold mb-10"
              title={`Resultados para: ${searchTerm}`}
            />
            <ProductGrid products={products} />
          </>
        )}
      </MaxWidthWrapper>
    </>
  );
};
