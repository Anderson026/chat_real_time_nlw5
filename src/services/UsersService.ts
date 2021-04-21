import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    // verificar se o usuário existe
    const userExists = await this.usersRepository.findOne({
      email
    });
    // se existir, retornar o usuário
    if (userExists) {
      return userExists;
    }
    // instancia o novo usuário
    const user = this.usersRepository.create({
      email
    });
    // salva no banco de dados
    await this.usersRepository.save(user);
    // se não existir, salvar no db
    return user;
  }
}

export { UsersService };