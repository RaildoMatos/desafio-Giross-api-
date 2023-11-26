/* eslint-disable prettier/prettier */

import { Controller, Get, Param } from '@nestjs/common';
import { CepService, CepData } from '../service/cep.service';

@Controller('cep')
export class CepController {
  constructor(private cepService: CepService) {}

  @Get(':cep')
  consultarCep(@Param('cep') cep: string): CepData {
    return this.cepService.consultarCep(cep);
  }
}
