import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1645012489309 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // vamos criar tabela de empresas
        await queryRunner.createTable(new Table({
            name:'product',
            columns:[
                {
                    name:'id',
                    type:'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'    
                },
                {
                    name:'name',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'quantity',
                    type: 'decimal'
                },
                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
