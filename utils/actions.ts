import { Product } from './../node_modules/.prisma/client/index.d';
import db from '@/utils/db';

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = () => {
  return db.product.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });
};
