import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoServiceService } from 'src/app/carrinho-service.service';
import { NotificationService } from 'src/app/notification.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto : IProduto | undefined ;
  quantidade : number = 1;

  constructor(private produtosService : ProdutosService,
              private route : ActivatedRoute,
              private notificacaoService : NotificationService,
              private carrinhoService : CarrinhoServiceService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho!");
    const produto : IProdutoCarrinho = {
      ...this.produto! ,
      quantidade : this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto);

  }



}
