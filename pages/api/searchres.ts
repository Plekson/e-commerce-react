// pages/api/searchres.ts
import { NextApiRequest, NextApiResponse } from 'next';
import products from './products.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { term } = req.query;

  if (typeof term !== 'string') {
    return res.status(400).json({ error: 'Invalid search term' });
  }

  const results = products.products
    .filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    )
    .slice(0, 5) // Ogranicz do maksymalnie 5 wyników
    .map((product) => ({
      id: product.id,
      name: product.name,
      link: `/item/${product.id}`, // Dodaj link do produktu z id w URL
    }));

  res.status(200).json(results);
};
