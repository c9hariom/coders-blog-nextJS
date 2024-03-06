import { promises as fs } from 'fs'

export default async function handler (req, res) {
  try {
    const requestData = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body
    }
    const index = requestData.body.txtEmail.indexOf('@')
    const afterAt =
      index !== -1 ? requestData.body.txtEmail.slice(0, index) : ''
    const files = await fs.readdir("contactData");
    const temp = files.length
    const file = await fs.writeFile(
      `contactData/${temp+1}-${afterAt}.json`,
      JSON.stringify(requestData.body)
    )
    res.status(200).json({ status: '200' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
