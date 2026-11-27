import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
import { Categoria } from './entities/categoria.entity.js';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const nuevaCategoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(nuevaCategoria);
  }

  async findAll() {
    return await this.categoriaRepository.find();
  }

  async findOne(id: number) {
    return await this.categoriaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    await this.categoriaRepository.update(id, updateCategoriaDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.categoriaRepository.delete(id);
  }
}