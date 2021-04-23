// importando o express
import express from "express";
// importando o servidor padrão do node para criar o servidor web socket
import { createServer } from "http";
// importando o server e o socket io
import { Server, Socket } from "socket.io";
// importando o path
import path from "path";
// importando o banco de dados
import "./database";
// importando as rotas
import { routes } from "./routes";

// colocando o express na variável app
const app = express();
// define onde estão os arquivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));
// define onde as views estão na pasta public
app.set("views", path.join(__dirname, "..","public"));
// define a view engine
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// rota de teste
app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});
// rota de teste admin
app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

// criando o protocolo http
const http = createServer(app);
// criando o servidor Web Socket
const io = new Server(http);

io.on("connection", (socket: Socket) => {
  // console.log("Se conectou", socket.id);
});

// configurando o json no express
app.use(express.json());

// utilizando as rotas
app.use(routes);

export { http, io };