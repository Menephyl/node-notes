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
const users =[]


app.get('/usuarios', (req, res) => {
 

    res.status(200).json(users)
})

app.post('/usuarios', (req, res) => {
   users.push(req.body)
   res.status(201).json({message:"Usuário criado com sucesso"})  // express ja modifica segundo o padrão e envia automaticamente 
 
})

app.listen(3000,()=> {
    console.log('servidor rodando na porta 3000')
} )



