export class CreateVendaDto {
  id: number;
  nomeCliente: string;
  dataHora: Date;
  valorTotal: number;
  itens: VendaItemDto[];
}

export class VendaItemDto {
  id: number;
  idProduto: number;
  quantidade: number;
  valorUnitario: number;
}
