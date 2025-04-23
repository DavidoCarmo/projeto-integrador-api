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

  async findAll() {
    return await this.produtosRepository.find({
      order: {
        id: 1,
      },
    });
  }

  async findOne(id: number) {
    return await this.produtosRepository.findOneBy({
      id,
    });
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
