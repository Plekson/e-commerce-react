import { NextApiRequest, NextApiResponse } from 'next';

export interface Category {
  id: number;
  name: string;
  slug: string;
}

const categories: Category[] = [
  { id: 1, name: "Akcesoria", slug: "akcesoria" },
  { id: 2, name: "Spodnie", slug: "spodnie" },
  { id: 3, name: "Bluzy", slug: "bluzy" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<Category[]>) {
  res.status(200).json(categories);
}
