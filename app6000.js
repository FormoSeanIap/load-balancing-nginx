const express = require('express');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json()); 

app.get('/', (req, res) => {
	setTimeout(() => {
		console.log("on 6000"); 
		res.send('res on 6000'); 
	}, 5000);
})

app.listen(6000);