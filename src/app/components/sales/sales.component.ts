import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SalesService } from '../../services/sales.service';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  products: any[] = [];
  searchTerm: string = '';
  selectedProduct: any = null;
  quantity: number = 1;
  cart: any[] = [];
  purchaseSummary: any[] = [];
  totalPaid: number = 0;
  showSummary: boolean = false;

  constructor(
    private productService: ProductService,
    private salesService: SalesService
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.cart = this.salesService.getCart();
  }

  searchProduct() {
    this.selectedProduct = this.products.find((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToCart() {
    if (
      this.selectedProduct &&
      this.quantity > 0 &&
      this.quantity <= this.selectedProduct.stock
    ) {
      this.salesService.addToCart(this.selectedProduct, this.quantity);
      this.cart = this.salesService.getCart();
      this.resetForm();
    }
  }

  checkout() {
    this.salesService.checkout();
    this.purchaseSummary = [...this.cart];
    this.totalPaid = this.purchaseSummary.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
    this.cart = this.salesService.getCart();
    this.products = this.productService.getProducts();
    this.showSummary = true;
  }

  resetForm() {
    this.searchTerm = '';
    this.selectedProduct = null;
    this.quantity = 1;
  }

  printSummary() {
    window.print();
    this.clearSummary();
  }

  clearSummary() {
    this.purchaseSummary = [];
    this.totalPaid = 0;
    this.showSummary = false;
  }
}
