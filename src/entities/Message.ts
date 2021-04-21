import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";
// criando a classe referente as dados da tabela messages
@Entity("messages")
class Message {

  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;
  // faz o join com o user_id
  @JoinColumn({ name: "user_id"})
  // muitas mensagens para um usuário
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}

export { Message }