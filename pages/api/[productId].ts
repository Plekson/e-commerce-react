import { NextApiRequest, NextApiResponse } from 'next';
import products from './products.json'; // Podaj ścieżkę do pliku z danymi produktów

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { productId },
  } = req;

  const parsedProductId = Number(productId);

  if (isNaN(parsedProductId)) {
    return res.status(400).json({ error: 'Invalid product ID' });
  }

  const product = products.products.find((p) => p.id === parsedProductId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
};
