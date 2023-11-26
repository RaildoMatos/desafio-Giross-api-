/* eslint-disable @typescript-eslint/no-unused-vars */
// src/cep-consulta/cep-consulta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CepConsultaEntity } from '../entity/cep-consulta.entity';

@Injectable()
export class CepConsultaService {
  consultarCeps(cep: string, raio: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(CepConsultaEntity)
    private readonly cepConsultaRepository: Repository<CepConsultaEntity>,
  ) {}

  async consultarCepsPorRaio(cep: string, raio: number): Promise<string[]> {
    // Lógica para consultar CEPs no raio especificado
    // Aqui você pode usar o TypeORM para interagir com o banco de dados
    // Salvar a consulta no banco de dados
    const cepConsulta = this.cepConsultaRepository.create({
      cep,
      raio,
    });
    await this.cepConsultaRepository.save(cepConsulta);

    // Essa é uma implementação de exemplo; adapte conforme necessário
    const cepsNoRaio = ['CEP1', 'CEP2', 'CEP3'];
    return cepsNoRaio;
  }
}
