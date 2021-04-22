import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";

// importando os dados de entities de connections
@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };