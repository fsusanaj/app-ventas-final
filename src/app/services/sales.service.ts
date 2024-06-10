import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private cart: any[] = [];

  constructor(private productService: ProductService) {}

  addToCart(product: any, quantity: number) {
    const existingProduct = this.cart.find(
      (item) => item.product.id === product.id
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
  }

  getCart() {
    return this.cart;
  }

  checkout() {
    this.cart.forEach((item) => {
      this.productService.updateProduct({
        ...item.product,
        stock: item.product.stock - item.quantity,
      });
    });
    this.cart = [];
  }
}
