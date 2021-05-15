const express = require("express")
const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get("/", (req, res) => {

    const necessaryTechnologies = [
        "Node js",
        "Ejs",
        "Express",
        "Bootstrap para estilos"
    ]

    const stepByStep = [
        {
            command: "mkdir nome_projeto",
            description: "Criar um diretório para o projeto"
        },
        {
            command: "cd nome_projeto",
            description: "Acessar ao diretório para o projeto"
        },
        {
            command: "yarn init -y",
            description: "Iniciando o projeto"
        },
        {
            command: "yarn add ejs express",
            description: "Instalando dependências de view e servidor respectivamente"
        },
        {
            command: "yarn add nodemon",
            description: "Instalando dependências de desenvolvimento para auto reload do servidor"
        },
        {
            command: "...",
            description: "Continuar com as demais configurações de programação"
        },
    ]

    res.render("pages/index", {
        necessaryTechnologies,
        stepByStep
    })
})
app.get("/sobre", (req, res) => {
    res.render("pages/about")
})

app.listen(port, () => { console.log("Servidor on em http://localhost:8080") })