import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos : IProduto[] = produtos;

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(IdProduto : number){
    return this.produtos.find(produto => produto.id = IdProduto);
  }
}
