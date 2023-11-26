// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { CepConsultaModule } from './cep-consulta.module';
import { HistoryModule } from './history.module';
import { AuthModule } from './auth.module';
import { CepConsultaEntity } from '../entity/cep-consulta.entity';
import { HistoryEntity } from '../entity/history.entity';
import { UserEntity } from '../user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8080,
      username: 'root',
      password: '94029844',
      database: 'mysql',
      entities: [CepConsultaEntity, HistoryEntity, UserEntity],
      synchronize: true,
      logging: true,
    }),
    CepConsultaModule,
    HistoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
