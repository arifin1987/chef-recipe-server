const express = require('express');
const app= express();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())
const chefs= require('./data/chefRecipe.json');


app.get('/', (req,res)=>{
    res.send('Tasty recipe is running....')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const recipe = chefs.find(n => n.id == id);
    res.send(recipe)
})

app.listen(port,()=>{
    console.log(`Tasty recipe is running on port: ${port}`)
})