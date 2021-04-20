// importando o express
import express from "express";
// importando o banco de dados
import "./database";

// colocando o express na variável app
const app = express();

// primeira rota de teste
app.get("/", (req, res) => {
  res.json({
    message: "Primeira Rota"
  });
});
// rota do tipo posto realizar os cadastros de usuários
app.post("/users", (req, res) => {
  return res.json({ message: "Usuário salvo com sucesso!"});
})

// define a porta que irá rodar o servidor
app.listen(3333, () => console.log("Server is running on port 3333"));



