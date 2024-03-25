export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface HomePageProps {
  searchParams: {
    page: string;
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });
  if (products.length === 0) {
    redirect("/");
  }
  return (
    <>
      <Title title="Shop" subtitle="All products" className="gap-4 my-7" />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
