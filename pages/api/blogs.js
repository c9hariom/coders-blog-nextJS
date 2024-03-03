import { promises as fs } from 'fs';


export default async function handler(req, res) {
    const files = await fs.readdir('blogposts');
    let data = [];
    for(let i=0; i< files.length ;i++){
        let data2 = await fs.readFile('blogposts/'+files[i],'utf-8');
        data2 = JSON.parse(data2)
        let temp ={}
        temp.title = data2.title
        temp.content = data2.content
        data.push(temp);
    }
    res.status(200).json(data)
  }
  