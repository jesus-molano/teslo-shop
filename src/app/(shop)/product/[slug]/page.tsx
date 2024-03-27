export const revalidate = 604800;
import { getProductBySlug } from "@/actions";
import {
  ProductDetails,
  DesktopSlideShow,
  MobileSlideShow,
} from "@/components";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 mb-20">
      <div className="col-span-1 md:col-span-2">
        <MobileSlideShow
          images={product.images}
          title={product.title}
          className="block md:hidden"
        />
        <DesktopSlideShow
          images={product.images}
          title={product.title}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5 ">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}
