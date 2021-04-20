// importando o router do express
import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";
// inserindo o router em uma variável
const routes = Router();
// criando a rota de settings
routes.post("/settings", async (request, response) => {
  // definindo o request body
  const { chat, usermane } = request.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create ({
    chat,
    usermane
  });

  await settingsRepository.save(settings);
  // retornando os dados em JSON
  return response.json(settings);

});

export { routes };