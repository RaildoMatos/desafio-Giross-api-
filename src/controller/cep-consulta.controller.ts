/* eslint-disable prettier/prettier */
// src/cep-consulta/cep-consulta.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CepConsultaService } from '../cep-consulta/cep-consulta.service';
import { HistoryService } from '../service/history.service';

@Controller('cep-consulta')
export class CepConsultaController {
  constructor(
    private readonly cepConsultaService: CepConsultaService,
    private readonly historyService: HistoryService,
  ) {}

  @Post()
  async consultarCeps(
    @Body() body: { cep: string; raio: number },
  ): Promise<any> {
    const { cep, raio } = body;

    const resultadoConsulta = await this.cepConsultaService.consultarCeps(
      cep,
      raio,
    );

    // Adicionar a consulta ao histórico
    await this.historyService.adicionarConsulta(cep, raio);

    return resultadoConsulta;
  }
}
