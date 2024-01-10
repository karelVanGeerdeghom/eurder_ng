import {PriceDto} from "../../price/dto/PriceDto";

export interface ItemDto {
  id: number,
  name: string,
  description: string,
  price: PriceDto,
  amountInStock: number
}
