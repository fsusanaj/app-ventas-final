import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  products: any[] = [];
  id: number = 0;
  name: string = '';
  description: string = '';
  price: number = 0;
  stock: number = 0;
  proveedor: string = '';
  isEditing: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addOrUpdateProduct() {
    if (this.isEditing) {
      this.productService.updateProduct({
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        proveedor: this.proveedor
      });
    } else {
      this.productService.addProduct({
        id: this.id,
        name: this.name,
        description: this.description,
        price: this.price,
        stock: this.stock,
        proveedor: this.proveedor
      });
    }
    this.resetForm();
  }

  editProduct(product: any) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
    this.proveedor = product.proveedor;
    this.isEditing = true;
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

  resetForm() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.price = 0;
    this.stock = 0;
    this.proveedor = '';
    this.isEditing = false;
  }
}
