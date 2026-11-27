import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaService } from './categoria.service.js';
import { CategoriaController } from './categoria.controller.js';
import { Categoria } from './entities/categoria.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
