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
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())



app.get('/usuarios', async (req, res) => {
    const users =  await prisma.user.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    res.status(201).json({ message: "Usuário criado com sucesso" })  // express ja modifica segundo o padrão e envia automaticamente 

})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})



