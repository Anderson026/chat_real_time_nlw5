// importando o request e response do express
import { Request, Response } from "express";
// importando o SettingsService que contém a regra de negócio
import { SettingsService } from "../services/SettingsService";
// colocando os dados da rota na classe SettingsController
class SettingsController {
  async create(request: Request, response: Response) {
    // definindo o request body
    const { chat, username } = request.body;
    // criando uma nova instância de settingsService
    const settingsService = new SettingsService();
    // se o usuário não existir cria-se um novo, senão, apresenta a mensagem de usuário já cadastrado
    try {
      // método para inserir dados no banco
      const settings = await settingsService.create({ chat, username });
  
      // retornando os dados em JSON
      return response.json(settings);
    }catch(err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async findByUsername(request: Request, response: Response) {
    const { username } = request.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return response.json(settings);
  }

  async update(request: Request, response: Response) {
    const { username } = request.params;
    const { chat } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return response.json(settings);
  }

}

export { SettingsController };