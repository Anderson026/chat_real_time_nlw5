// importando as entidades que ficarão na classe users
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";

// definindo as entidades de cada elemento da classe
@Entity("users")
class User {

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}
// exportando a classe
export { User }