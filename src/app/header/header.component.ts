import { Component, OnInit } from '@angular/core';
import { CarrinhoServiceService } from '../carrinho-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public carrinhoService : CarrinhoServiceService) { }

  ngOnInit(): void {
  }

}
