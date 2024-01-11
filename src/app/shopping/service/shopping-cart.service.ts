import { Injectable } from '@angular/core';
import {ItemDto} from "../../items/dto/ItemDto";
import {ShoppingCartItem} from "../dto/ShoppingCartItem";
import {PriceDto} from "../../price/dto/PriceDto";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _shoppingCartItems: ShoppingCartItem[] = [
    {
      amount: 1,
      item: {
        id: 1,
        name: 'name',
        description: 'description',
        price: {
          amount: 10,
          currency: 'EUR'
        },
        amountInStock: 10
      }
    },
    {
      amount: 1,
      item: {
        id: 1,
        name: 'name',
        description: 'description',
        price: {
          amount: 10,
          currency: 'EUR'
        },
        amountInStock: 10
      }
    }
  ];

  constructor() { }

  addToCart(itemDto: ItemDto) {
    let shoppingCartItem = {
      amount: 1,
      item: itemDto
    }

    this._shoppingCartItems.push(shoppingCartItem);
  }

  removeFromCart(shoppingCartItem: ShoppingCartItem) {
    this._shoppingCartItems.splice(this._shoppingCartItems.indexOf(shoppingCartItem), 1);
  }

  getShoppingCartItems(): ShoppingCartItem[] {
    return this._shoppingCartItems;
  }

  getShoppingCartTotal() {
    return this._shoppingCartItems.reduce(
      (shoppingCartTotal, shoppingCartItem) => shoppingCartTotal + shoppingCartItem.item.price.amount * shoppingCartItem.amount,
      0.0
    )
  }
}
