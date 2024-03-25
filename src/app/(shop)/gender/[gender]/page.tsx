import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface GenderPageProps {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
  };
}
export default async function GenderPage({
  params,
  searchParams,
}: GenderPageProps) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page, gender: gender as Gender });
  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }
  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <div>
      <Title
        title="Shop"
        subtitle={`${gender.toUpperCase()}`}
        className="gap-4 my-7"
      />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
