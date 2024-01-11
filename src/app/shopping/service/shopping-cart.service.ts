import {inject, Injectable} from '@angular/core';
import {ItemDto} from "../../items/dto/ItemDto";
import {ShoppingCartItem} from "../dto/ShoppingCartItem";
import {CreateOrderDto} from "../dto/CreateOrderDto";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {OrderDto} from "../dto/OrderDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private readonly _url: string;
  private _shoppingCartItems: ShoppingCartItem[] = [];
  private http: HttpClient = inject(HttpClient);

  constructor() {
    this._url = `${environment.backendUrl}/orders`;
  }

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

  placeOrder(): Observable<OrderDto> {
    let createOrderDto: CreateOrderDto = {
      orderLines: [],
      orderDate: new Date()
    }

    this._shoppingCartItems.forEach(shoppingCartItem => {
      createOrderDto.orderLines.push({
        itemId: shoppingCartItem.item.id,
        amountInOrder: shoppingCartItem.amount
      });
    });

    return this.http.post<OrderDto>(this._url, createOrderDto, {
      headers: {
        email: 'firstName.lastName@mail.com',
        password: 'password'
      }
    });
  }

  emptyCart() {
    this._shoppingCartItems = [];
  }
}
