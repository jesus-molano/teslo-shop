import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  // Delete all data in the database
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.country.deleteMany();

  const { categories, products, users, countries } = initialData;

  // Insert users
  await prisma.user.createMany({
    data: users,
  });

  // Insert categories
  const categoriesData = categories.map((category) => ({
    name: category,
  }));
  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesInDb = await prisma.category.findMany();
  const categoriesMap = categoriesInDb.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <string=shirt, string=categoryId

  // Insert products
  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // Insert product images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  // Insert countries
  await prisma.country.createMany({
    data: countries,
  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
