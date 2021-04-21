import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/User";

// importando as entities de user
@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export { UsersRepository };