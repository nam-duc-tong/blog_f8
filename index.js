const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {
    var a = 5+16;
    var b = 15+6;
    var c = a*b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})