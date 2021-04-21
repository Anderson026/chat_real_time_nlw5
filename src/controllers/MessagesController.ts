import { Request, Response } from "express";

import { MessagesService } from "../services/MessagesService";
// criando a regra de negócios da tabela messages
class MessagesController {
  async create(request: Request, response: Response) {
    // pegando os dados 
    const { admin_id, text, user_id } = request.body;
    // criando uma nova instância da classe
    const messagesService = new MessagesService();
    // pegando os dados e colocando na variável
    const message = await messagesService.create({
      admin_id,
      text,
      user_id
    });
    // retornando a variável num json
    return response.json(message);
  }
  // aqui vai pegar os dados pelos parâmetros
  // localhost:3333/messages/idDoUsuário
  async showByUser(request: Request, response: Response) {
    const { id } =  request.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return response.json(list);
  }
}

export { MessagesController };