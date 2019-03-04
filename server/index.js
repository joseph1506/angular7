const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const port = process.env.PORT || 3000;


app.post('/register', (req, res) => {
  console.log('123333', req.body)
});

app.listen(port, () => console.log("Server listening at "+port))
