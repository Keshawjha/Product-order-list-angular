import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOrderComponent } from './product-order/product-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductOrderComponent, OrderSummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orders: any[] = [];
  showOrderList: boolean = false;

  updateOrders(orders: any[]) {
    this.orders = orders;
  }

  toggleOrderList() {
    this.showOrderList = !this.showOrderList;
  }

  readOrder() {
    let orderText = this.orders.map(order => `${order.product} - ${order.quantity} - ${order.priceRange}`).join(', ');
    let utterance = new SpeechSynthesisUtterance(orderText);
    speechSynthesis.speak(utterance);
  }
}
