import {
  ProductDetails,
  DesktopSlideShow,
  MobileSlideShow,
} from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

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
