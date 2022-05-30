import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEmpresas1647258715363 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'empresa',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'nome',
                        type: 'varchar'
                    },
                    {
                        name:'email',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name: 'cnpj',
                        type: 'varchar',
                        isUnique: true
                    },
                    {
                        name:'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name:'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
