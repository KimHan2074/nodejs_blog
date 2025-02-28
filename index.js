const express = require('express')
const app = express()
const port = 3000

// route
app.get('/trang_chu', (req, res) => {
  res.send('Hello World!')
})
// 127.0.0.1 (địa chỉ IP => localhost)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})