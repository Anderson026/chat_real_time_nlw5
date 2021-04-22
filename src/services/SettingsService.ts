
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";

import { SettingsRepository } from "../repositories/SettingsRepository";
// criando a interface para passar o chat e o username
interface ISettingsCreate {
  chat: Boolean;
  username: String;
}
// classe que terá a regra de negócio de Settings
class SettingsService {

  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create({ chat, username }: ISettingsCreate) {

    // é o equivalente a = select * from settings where username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({ 
      username
    });
    // verifica se o usuário já existe
     if (userAlreadyExists) {
       throw new Error("User already exists!");
     }

    const settings = this.settingsRepository.create ({
      chat,
      username
    });

    await this.settingsRepository.save(settings);

    return settings;
  }

  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({
      username,
    });
    return settings;
  }  

  async update(username: string, chat: boolean) {
    await this.settingsRepository.createQueryBuilder().
      update(Setting)
      .set({chat})
      .where("username = :username", {
        username
      })
      .execute();
  }
};

export { SettingsService };

