const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

app.get('/', (req, res) => {
	setTimeout(() => {
		console.log("on 7000"); 
		res.send('res on 7000'); 
	}, 5000);
})

app.listen(7000);