// importando o router do express
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

// inserindo o router em uma variável
const routes = Router();
// inserindo o controller na variável
const settingsController = new SettingsController
// inserindo a instância de users na variável
const usersController = new UsersController()
// criando a rota de settings
routes.post("/settings",settingsController.create);
// criando a rota de users
routes.post("/users", usersController.create);

export { routes };