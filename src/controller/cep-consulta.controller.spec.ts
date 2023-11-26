import { Test, TestingModule } from '@nestjs/testing';
import { CepConsultaController } from './cep-consulta.controller';

describe('CepConsultaController', () => {
  let controller: CepConsultaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CepConsultaController],
    }).compile();

    controller = module.get<CepConsultaController>(CepConsultaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
