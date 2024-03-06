import { promises as fs } from 'fs';


export default async function handler(req, res) {
    const count = req.query.count;
    const page = req.query.page;
    const files = await fs.readdir('blogposts');
    const totalResults = files.length;
    let data = [];
    for(let i=((page-1)*count); i< page*count ;i++){
        let data2 = await fs.readFile('blogposts/'+files[i],'utf-8');
        data2 = JSON.parse(data2)
        let temp ={}
        temp.slug = files[i].slice(0,-5)
        temp.title = data2.title
        temp.content = data2.content
        data.push(temp);
    }

    res.status(200).json({totalResults,data})
  }
  