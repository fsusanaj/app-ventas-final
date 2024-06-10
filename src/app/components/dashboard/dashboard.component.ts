import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  totalProducts: number = 0;
  totalStock: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const products = this.productService.getProducts();
    this.totalProducts = products.length;
    this.totalStock = products.reduce((sum, product) => sum + product.stock, 0);




  }
  }



