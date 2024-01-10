import {PriceDto} from "../../price/dto/PriceDto";

export interface UpdateItemDto {
  name: string,
  description: string,
  price: PriceDto,
  amountInStock: number
}
