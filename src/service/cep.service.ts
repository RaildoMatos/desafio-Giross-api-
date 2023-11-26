/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
// cep.service.ts
import { Injectable } from '@nestjs/common';
export interface CepData {
  rua: string;
  bairro: any;
  cidade: string;
  estado: string;
  cep: string;
}
@Injectable()
export class CepService {
  consultarCep(_cep: string): CepData {
    const dadosDoCep: CepData = {
      rua: 'Nome da Rua',
      bairro: 'Nome do Bairro',
      cidade: 'Nome da Cidade',
      estado: 'Nome do Estado',
      cep: '12345-678',
    };
    // Implemente a lógica para consultar o CEP
    // Pode ser necessário usar uma API externa
    return dadosDoCep;
  }
}
