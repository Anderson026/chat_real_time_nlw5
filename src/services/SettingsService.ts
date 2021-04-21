
import { getCustomRepository } from "typeorm";

import { SettingsRepository } from "../repositories/SettingsRepository";
// criando a interface para passar o chat e o username
interface ISettingsCreate {
  chat: Boolean;
  username: String;
}
// classe que terá a regra de negócio de Settings
class SettingsService {
  async create({ chat, username }: ISettingsCreate) {

    const settingsRepository = getCustomRepository(SettingsRepository);

    // é o equivalente a = select * from settings where username = "username" limit 1;
    const userAlreadyExists = await settingsRepository.findOne({ 
      username
    });
    // verifica se o usuário já existe
     if (userAlreadyExists) {
       throw new Error("User already exists!");
     }

    const settings = settingsRepository.create ({
      chat,
      username
    });

    await settingsRepository.save(settings);

    return settings;
  }
};

export { SettingsService };
