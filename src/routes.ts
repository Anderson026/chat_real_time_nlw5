// importando o router do express
import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";

// inserindo o router em uma variável
const routes = Router();
// inserindo o controller na variável
const settingsController = new SettingsController
// criando a rota de settings
routes.post("/settings",settingsController.create);

export { routes };