/*  INSTALANDO  SERVIDOR.JS

ANTIGO 
const expres = require("express")


NOVO 
import express from 'express'

// REQ request
// RES response
// cada alteração, precisa atualizar no terminal 

*/
import express from 'express'

const app = express()
app.use(express.json())


app.get('/usuarios', (req, res) => {
    console.log(req.query)
    res.send('ANTEDEGUEMON!')
})

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('gostosa')
})

app.listen(3000,()=> {
    console.log('servidor rodando na porta 3000')
} )



