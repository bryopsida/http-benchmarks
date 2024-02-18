const express = require('express')
const app = express()
const port = 3000

const resp = {
    test: 'test'
}

app.get('/', (req, res) => {
  res.json(resp)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})