import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  preco: number;

  @Column()
  quantidade: number;

  @Column({ name: 'data_atualizacao' })
  dataAtualizacao: Date;

  @Column()
  imagem: string;
}
