// importando o request e response do express
import { Request, Response } from "express";

import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository"
// colocando os dados da rota na classe SettingsController
class SettingsController {
  async create(request: Request, response: Response) {
    // definindo o request body
  const { chat, username } = request.body;
  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create ({
    chat,
    username
  });

  await settingsRepository.save(settings);
  // retornando os dados em JSON
  return response.json(settings);
  }
}

export { SettingsController }