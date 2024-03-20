import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    id: string;
  };
}
export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;
  const filteredProducts = initialData.products.filter(
    (product) => product.gender === id
  );

  // if (id === "kids") {
  //   notFound();
  // }

  return (
    <div>
      <Title
        title="Shop"
        subtitle={`${id.toUpperCase()}`}
        className="gap-4 my-7"
      />
      <ProductsGrid products={filteredProducts} />
    </div>
  );
}
