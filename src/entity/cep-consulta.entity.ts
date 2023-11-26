/* eslint-disable prettier/prettier */
// src/cep-consulta/cep-consulta.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cep_consulta')
export class CepConsultaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  raio: number;
}
