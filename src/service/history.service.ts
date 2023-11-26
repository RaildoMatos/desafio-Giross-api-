/* eslint-disable @typescript-eslint/no-unused-vars */
// src/history/history.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryEntity } from '../entity/history.entity';

@Injectable()
export class HistoryService {
  create(
    cep: string,
    raio: number,
  ): HistoryEntity | PromiseLike<HistoryEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): HistoryEntity[] | PromiseLike<HistoryEntity[]> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(HistoryEntity)
    private historyRepository: Repository<HistoryEntity>,
  ) {}

  async adicionarConsulta(cep: string, raio: number): Promise<HistoryEntity> {
    const consulta = this.historyRepository.create({ cep, raio });
    return await this.historyRepository.save(consulta);
  }

  async obterHistorico(): Promise<HistoryEntity[]> {
    return await this.historyRepository.find();
  }
}
