import {ItemDto} from "../../items/dto/ItemDto";

export interface ShoppingCartItem {
  amount: number,
  item: ItemDto,
}
