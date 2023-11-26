/* eslint-disable prettier/prettier */
// src/history/history.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryEntity } from '../entity/history.entity';
import { HistoryService } from '../service/history.service';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  providers: [HistoryService],
  exports: [HistoryService],
})
export class HistoryModule {}
