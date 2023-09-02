import { ItemModel } from 'src/infra/database/typeOrm/models/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProcessModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigoLicitacao: string;

  @Column()
  identificacao: string;

  @Column()
  numero: string;

  @Column()
  resumo: string;

  @Column()
  codigoSituacaoEdital: number;

  @Column()
  codigoStatus: number;

  @Column()
  dataHoraInicioLances: Date;

  @OneToMany(() => ItemModel, (item) => item.process)
  items?: ItemModel[];
}