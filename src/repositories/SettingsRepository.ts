// importando as funcionalidades do Repository para a classse que está sendo criada
import { EntityRepository, Repository } from "typeorm";
// importando as entities
import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository };