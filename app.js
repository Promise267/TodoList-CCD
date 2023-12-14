const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 80

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => 
    res.sendFile("index.html")
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))