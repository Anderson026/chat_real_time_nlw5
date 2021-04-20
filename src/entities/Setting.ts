// importando as entidades, colunas, criar e mudar colunas
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm"
// importando o uuid
import { v4 as uuid } from "uuid"

// criando a classe com os dados referentes a tabela Settings
@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: String;

  @Column()
  username: String;

  @Column()
  chat: Boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
  // verifica se o id ta preenchido, se não tiver preenche o id
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
// exportando a classe Settings
export { Setting };