import { EntityRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";


// importando os entities de message
@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {

}

export { MessagesRepository }