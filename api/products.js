
import fs from 'fs';

export default function handler(req, res) {
  const data = JSON.parse(fs.readFileSync('data/products.json'));
  res.status(200).json(data);
}
