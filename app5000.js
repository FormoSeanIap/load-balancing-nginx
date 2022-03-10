const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

app.get('/', (req, res) => {
	res.send('res on 5000'); 
	console.log("on 5000"); 
})

app.listen(5000);