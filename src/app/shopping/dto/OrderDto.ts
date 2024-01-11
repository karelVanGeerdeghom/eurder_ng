import {OrderLineDto} from "./OrderLineDto";
import {PriceDto} from "../../price/dto/PriceDto";

export interface OrderDto {
  id: number,
  customerId: number,
  customerAddress: string,
  orderLines: OrderLineDto[],
  orderDate: Date,
  totalPrice: PriceDto
}
