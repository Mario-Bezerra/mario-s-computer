import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarrinhoServiceService } from '../carrinho-service.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho : IProdutoCarrinho[] = [];
  total = 0 ;

  constructor(public carrinhoService : CarrinhoServiceService) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotalDaCompra();
  }

  removerItemCarrinho(produtoId : number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerItemDoCarrinho(produtoId);
    this.calcularTotalDaCompra();
  }

  calcularTotalDaCompra(){
    this.total = this.itensCarrinho.reduce(((prev , curr) => prev + (curr.preco * curr.quantidade)),0);
  }
}
