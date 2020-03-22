import express from 'express';
import storage from './memory_storage.js'
import cors from 'cors'

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
app.use(cors()) 

app.get('/posts', (req, res) => {

    let posts = storage.posts
    let query = req.query
   
    if (query.createdBy) {
        posts = posts.filter(e => e.createdBy.indexOf(query.createdBy)  >= 0 )
    if( query.title){
        posts = posts.filter(e => e.title.indexOf(query.title) >= 0 )
    }
    }
    res.json(posts) // i dalje vraćamo sve za sada...
   });

   


app.listen(port, () => console.log(`Slušam na portu ${port}!`))