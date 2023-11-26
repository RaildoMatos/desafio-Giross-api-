import { Test, TestingModule } from '@nestjs/testing';
import { CepConsultaService } from './cep-consulta.service';

describe('CepConsultaService', () => {
  let service: CepConsultaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CepConsultaService],
    }).compile();

    service = module.get<CepConsultaService>(CepConsultaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
