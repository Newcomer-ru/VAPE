
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  const { title, price, stock } = req.body;
  const data = JSON.parse(fs.readFileSync('data/products.json'));
  data.push({ id: uuidv4(), title, price, stock });
  fs.writeFileSync('data/products.json', JSON.stringify(data, null, 2));
  res.status(200).json({ success: true });
}
