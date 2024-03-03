import { promises as fs } from 'fs'

export default async function handler (req, res) {
  try{const slug = req.query.blog
  const files =await fs.readFile(`blogposts/${slug}.json`, "utf-8")
  if(files){
    res.status(200).json(JSON.parse(files))
  }} catch {
    res.status(404).json({status:"not found"})
  }
}
