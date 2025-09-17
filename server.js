/*  INSTALANDO  SERVIDOR.JS

ANTIGO 
const expres = require("express")


NOVO 
import express from 'express'

// REQ request
// RES response
// cada alteração, precisa atualizar no terminal 

*/
import express, { request, response } from 'express'

const app = express()
app.use(express.json)

app.get('/usuarios', (request, response) => {
    console.log(request)

    response.send('ANTEDEGUEMON! ')
})

app.post('/usuarios',(req,res)=>{
console.log(req.body)
    res.send('gostosa')
})

app.listen(3000)



