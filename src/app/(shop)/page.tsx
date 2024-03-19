import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function HomePage() {
  return (
    <>
      <Title title="Shop" subtitle="All products" className="gap-4 my-7" />
      <ProductsGrid products={products} />
    </>
  );
}
