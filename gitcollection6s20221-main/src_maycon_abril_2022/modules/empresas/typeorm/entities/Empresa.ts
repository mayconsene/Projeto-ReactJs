import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"
// vamos decorar a classe
@Entity('empresa')
class Empresa {
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    nome: string
    @Column('varchar')
    cnpj: string
    @Column('varchar')
    email: string
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date

}
export default Empresa