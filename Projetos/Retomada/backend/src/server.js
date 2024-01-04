const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()


app.use(express.json())
app.use(cors())
app.use(router)

app.get('/', (req,res) => { //Primeira rota feita
   res.send('Hello')
})

app.listen(3001, () => {
   console.log('server iniciado');
})