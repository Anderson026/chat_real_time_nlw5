import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"
// criando a interface de messages
interface IMessageCreate {
  admin_id?: string;
  text: string;
  user_id: string;
}
// criando a classe que terá a regra de negócio de messages
class MessagesService {
  // atributo disponível apenas para MessagesService
  private messagesRepository: Repository<Message>;

  constructor () {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ admin_id, text, user_id }: IMessageCreate) {

    const message = this.messagesRepository.create({
      admin_id,
      text,
      user_id
    });

    await this.messagesRepository.save(message);

    return message;

  }
  // método para retornar todas as mensagens de acordo com o id o usuário selecionado
  async listByUser(user_id: string) {

    const list = await this.messagesRepository.find({
      where: {user_id},
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService }