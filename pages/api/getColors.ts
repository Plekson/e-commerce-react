import { NextApiRequest, NextApiResponse } from 'next';

const colors = [
    { hex: "#ff0000", name: "Czerwony" },
    { hex: "#00ff00", name: "Zielony" },
    { hex: "#0000ff", name: "Niebieski" },
  ];

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Przykładowa logika, która zawsze zwraca wszystkie kolory
    res.status(200).json({ colors });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
