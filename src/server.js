const express = require ('express')
const path = require ('node:path')
const router = require('./routes/routes')

const app = express()


// config do ejs como view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))

// Configuração para ler dados do formulário
app.use(express.urlencoded({ extended: true }))

// Middleware para servir arquivos estáticos na pasta public
app.use(express.static('public'))

//Rotas da aplicação
app.use(router)



const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`servidor iniciado em http://localhost:${PORT}`) )
