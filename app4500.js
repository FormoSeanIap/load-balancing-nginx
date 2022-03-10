const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

app.get('/', (req, res) => {
	res.send('res on 4500'); 
	console.log("on 4500"); 
})

app.listen(4500);