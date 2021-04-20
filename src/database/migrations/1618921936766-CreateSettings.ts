import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSettings1618921936766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // criando a tabela settings
        await queryRunner.createTable(
            /* aqui se configura os dados que terá na tabela como id, uuid
             (id universal), primary key, entre outros*/
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // desfazer o que foi feito no up
        await queryRunner.dropTable("settings");
    }

}
