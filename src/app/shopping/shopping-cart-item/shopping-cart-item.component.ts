import {Component, Input} from '@angular/core';
import {ShoppingCartItem} from "../dto/ShoppingCartItem";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";
import {FormsModule} from "@angular/forms";
import {ShoppingCartService} from "../service/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [
    PriceCurrencyPipe,
    FormsModule
  ],
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent {
  @Input() shoppingCartItem!: ShoppingCartItem;


  constructor(private shoppingCartService: ShoppingCartService) {
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.shoppingCartItem)
  }
}
