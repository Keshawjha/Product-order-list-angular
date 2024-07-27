import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent {
  products = ['Television', 'Fridge', 'AC', 'Washing Machine', 'Microwave', 'Iron', 'Mobile', 'Laptop', 'Speaker'];
  quantities = [0, 1, 2, 3, 4, 5];
  priceRanges = ['Rs.5,000 to Rs.10,000', 'Rs.10,000 to Rs.20,000', 'Rs.20,000 to Rs.30,000', 'Rs.30,000 to Rs.40,000', 'Rs.40,000 to Rs.50,000', 'Rs.50,000 and above'];
  orders = [{ product: '', quantity: null, priceRange: '' }];
  
  @Output() ordersUpdated = new EventEmitter<any[]>();

  addOrder() {
    if (this.orders.length < 8) {
      this.orders.push({ product: '', quantity: null, priceRange: '' });
    }
  }

  onProductChange(index: number) {
    if (this.orders[index].product && this.orders[index].quantity && this.orders[index].priceRange) {
      if (index === this.orders.length - 1 && this.orders.length < 8) {
        this.addOrder();
      }
    }
  }

  onQuantityChange(index: number) {
    if (this.orders[index].product && this.orders[index].quantity && this.orders[index].priceRange) {
      if (index === this.orders.length - 1 && this.orders.length < 8) {
        this.addOrder();
      }
    }
  }

  onPriceRangeChange(index: number) {
    if (this.orders[index].product && this.orders[index].quantity && this.orders[index].priceRange) {
      if (index === this.orders.length - 1 && this.orders.length < 8) {
        this.addOrder();
      }
    }
  }

  showOrder() {
    this.orders = this.orders.filter(order => order.product && order.quantity && order.priceRange);
    this.ordersUpdated.emit(this.orders);
  }
}
