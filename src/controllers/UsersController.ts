
import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";
// criando a regra de negócios da tabela users
class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    // pega o email
    const { email } = request.body;
    // cria uma nova instância
    const usersService = new UsersService();
    // coloca o emial dentro da variável
    const user = await usersService.create(email);
    // retorna como um json
    return response.json(user);
  }
}

export { UsersController };