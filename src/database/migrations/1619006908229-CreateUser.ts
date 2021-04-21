import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1619006908229 implements MigrationInterface {
    // criando a query para criar a tabela de users e a sua estrutura de dados
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable (
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // defaz o que foi criado acima
        await queryRunner.dropTable("users");
    }

}
