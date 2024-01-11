import {PriceDto} from "../../price/dto/PriceDto";

export interface OrderLineDto {
  itemId: number,
  itemName: string,
  itemPrice: PriceDto,
  amountInOrder: number,
  shippingDate: string,
  totalPrice: PriceDto,
}
