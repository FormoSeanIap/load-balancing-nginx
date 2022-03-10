const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

app.get('/', (req, res) => {
	res.send('res on 4000'); 
	console.log("on 4000"); 
})

app.listen(4000);