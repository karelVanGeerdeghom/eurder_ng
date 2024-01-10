import {PriceDto} from "../../price/dto/PriceDto";

export interface CreateItemDto {
  name: string,
  description: string,
  price: PriceDto,
  amountInStock: number
}
