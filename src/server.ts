// importando o express
import express from "express";
// importando o banco de dados
import "./database";
// importando as rotas
import { routes } from "./routes";

// colocando o express na variável app
const app = express();
// configurando o json no express
app.use(express.json());

// utilizando as rotas
app.use(routes);

// define a porta que irá rodar o servidor
app.listen(3333, () => console.log("Server is running on port 3333"));



