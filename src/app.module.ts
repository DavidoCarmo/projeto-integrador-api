import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [ProdutosModule, VendasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
