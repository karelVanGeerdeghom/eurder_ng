import { Component } from '@angular/core';
import {ShoppingCartService} from "../service/shopping-cart.service";
import {NgForOf} from "@angular/common";
import {ShoppingCartItemComponent} from "../shopping-cart-item/shopping-cart-item.component";
import {FormsModule} from "@angular/forms";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [
    NgForOf,
    ShoppingCartItemComponent,
    FormsModule,
    PriceCurrencyPipe
  ],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  private _defaultCurrency = 'EUR';

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  getShoppingCartItems() {
    return this.shoppingCartService.getShoppingCartItems();
  }

  getShoppingCartTotal() {
    return this.shoppingCartService.getShoppingCartTotal();
  }

  get defaultCurrency() {
    return this._defaultCurrency;
  }
}
