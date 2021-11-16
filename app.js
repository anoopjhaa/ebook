const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routes/books.js')
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api', router)

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection successful `)
  })
  .catch((err) => console.log(err))

const port = process.env.PORT || 5050

// if (process.env.NODE_ENV == 'production') {
//   app.use(express.static('ebook/build'))
// }

app.listen(port)
