import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./list-products-component.component.css']
})
export class ListProductsComponentComponent implements OnInit {

  ListProduct: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.ListProduct = this.productService.getAllProducts();
  }

  calculate(libelle: string) {
    const count = this.productService.getNbProductsByLibelle(libelle);
    alert(`Nombre de produits avec le libelle ${libelle}: ${count}`);
  }

}
