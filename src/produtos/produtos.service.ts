import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private produtosRepository: Repository<Produto>,
  ) {}

  async create(createProdutoDto: CreateProdutoDto) {
    return await this.produtosRepository.save({
      ...createProdutoDto,
      dataAtualizacao: new Date(),
    });
  }

  findAll() {
    return `This action returns all produtos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    await this.produtosRepository.update(id, {
      ...updateProdutoDto,
      dataAtualizacao: new Date(),
    });
    return this.produtosRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
