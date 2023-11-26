/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

// src/history/history.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { HistoryService } from '../service/history.service';
import { HistoryEntity } from '../entity/history.entity';
import { request } from 'http';
@Controller('history')
export class HistoryController {
  constructor(private historyService: HistoryService) {}

  @Get()
  async findAll(): Promise<HistoryEntity[]> {
    return this.historyService.findAll();
  }
  @Post()
  async createHistory(
    @Body() requestBody: { cep: string; raio: number },
  ): Promise<HistoryEntity> {
    const { cep, raio } = requestBody;
    return this.historyService.create(cep, raio);
  }
}
