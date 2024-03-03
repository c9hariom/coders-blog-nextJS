import { promises as fs } from 'fs';


export default async function handler(req, res) {
    const files = await fs.readdir('blogposts');
    res.status(200).json(files)
  }
  