import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Coca Cola',
      description: 'Bebida Azucarada',
      price: 36,
      stock: 150,
      proveedor: 'CocaCola Inc',
    },
    {
      id: 2,
      name: 'Pan Bimbo',
      description: 'Pan Blanco',
      price: 38,
      stock: 20,
      proveedor: 'Bimbo Inc',
    },
    {
      id: 3,
      name: 'Sopa Maggi',
      description: 'Sopa en Sobre',
      price: 16,
      stock: 39,
      proveedor: 'Maggi',
    },
    {
      id: 4,
      name: 'seven Up',
      description: 'Bebida Azucarada',
      price: 15,
      stock: 30,
      proveedor: 'Refrescos Nacionales',
    },
    {
      id: 5,
      name: 'Arina de Maiz',
      description: 'Consumible',
      price: 23,
      stock: 45,
      proveedor: 'Local',
    },
    {
      id: 6,
      name: 'Salchicas Emilio',
      description: 'Salchica de Pavo',
      price: 45,
      stock: 67,
      proveedor: 'Fut Inc',
    },
    {
      id: 7,
      name: 'Queso MAnchego',
      description: 'Queso Fresco',
      price: 35,
      stock: 39,
      proveedor: 'San Rafael',
    },
    {
      id: 8,
      name: 'Sopa Marucha',
      description: 'Sopa Instantania',
      price: 10,
      stock: 50,
      proveedor: 'Marucha Inc',
    },
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  addProduct(product: any) {
    this.products.push(product);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  updateProduct(updatedProduct: any) {
    const index = this.products.findIndex(
      (product) => product.id === updatedProduct.id
    );
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
}
