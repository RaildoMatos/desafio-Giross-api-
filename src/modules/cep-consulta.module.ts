/* eslint-disable prettier/prettier */
// src/cep-consulta/cep-consulta.module.ts
import { Module } from '@nestjs/common';
import { CepConsultaController } from '../controller/cep-consulta.controller';
import { CepConsultaService } from '../cep-consulta/cep-consulta.service';

@Module({
  controllers: [CepConsultaController],
  providers: [CepConsultaService],
})
export class CepConsultaModule {}
