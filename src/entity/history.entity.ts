/* eslint-disable prettier/prettier */
// src/history/history.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('history')
export class HistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  raio: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
