import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    // verificar se o usuário existe
    const userExists = await usersRepository.findOne({
      email
    });
    // se existir, retornar o usuário
    if (userExists) {
      return userExists;
    }
    // instancia o novo usuário
    const user = usersRepository.create({
      email
    });
    // salva no banco de dados
    await usersRepository.save(user);
    // se não existir, salvar no db
    return user;
  }
}

export { UsersService };