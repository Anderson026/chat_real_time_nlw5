import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateConnections1619102425548 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // criando a estrutura da tabela connections
        await queryRunner.createTable(
            new Table({
                name: "connections",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    },
                    {
                        name:"socket_id",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        );
        // criando uma foreign key fora do escopo de criações de tabelas
        await queryRunner.createForeignKey(
           "connections" ,
           new TableForeignKey({
            name: "FKConnectionUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
           })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // remover a foreign key
        await queryRunner.dropForeignKey("connections", "FKConnectionUser");
        // deletar a tabela
        await queryRunner.dropTable("connections");
    }


}
