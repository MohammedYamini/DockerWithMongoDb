const express = require('express')
const mongoose = require('mongoose')
const morgan = require("morgan");
const bodyParser = require("body-parser");

const UserRoute = require("./router/User")
const ProductRoute = require("./router/Produit")

const app = express()
const port = 3000

// const db_user = 'root';
// const db_psswd = 'mohammed'
// const db_port = 27017
// const db_host = 'mongo';

// const URI = `mongodb://${db_user}:${db_psswd}@${db_host}:${db_port}/MiniProject`
// mongoose
//     .connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => console.log('good connet with mongodb'))
//     .catch((err) => console.log('not connect with mongodb', err));



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose
    .connect("mongodb://root:mohammed@mongo:27017/", options)
    .then(() => console.log('good connet with mongodb'))
    .catch((err) => console.log('not connect with mongodb', err));

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use("/api/user", UserRoute  )
app.use("/api/product", ProductRoute  )