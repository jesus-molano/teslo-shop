import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    id: string;
  };
}
export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;

  if (id === "kids") {
    notFound();
  }

  return (
    <div>
      <h1>Cart Page</h1>
    </div>
  );
}
