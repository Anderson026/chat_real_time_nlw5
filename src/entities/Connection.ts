import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";

import { v4 as uuid } from "uuid";
import { User } from "./User";
// criando a classe referente as dados da tabela connections
@Entity("connections")
class Connection {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  socket_id: string;
  // faz o join com o user_id
  @JoinColumn({ name: "user_id"})
  // muitas mensagens para um usuário
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Connection };