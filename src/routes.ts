// importando o router do express
import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

// inserindo o router em uma variável
const routes = Router();
// inserindo o controller na variável
const settingsController = new SettingsController
// inserindo a instância de users na variável
const usersController = new UsersController()
// inserindo a instância de messagesController na variável
const messagesController = new MessagesController();
// criando a rota de settings
routes.post("/settings",settingsController.create);

routes.get("/settings/:username",settingsController.findByUsername);
// criando a rota de users
routes.post("/users", usersController.create);
// criando a rota de messages
routes.post("/messages", messagesController.create);
// criando a rota de lista de mensagem do usuário em específico
routes.get("/messages/:id", messagesController.showByUser);



export { routes };