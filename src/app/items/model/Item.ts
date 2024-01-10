import { Price } from "../../price/model/Price";

export interface Item {
  id: number,
  name: string,
  description: string,
  price: Price,
  amountInStock: number
}
