import {CreateOrderLineDto} from "./CreateOrderLineDto";

export interface CreateOrderDto {
  orderLines: CreateOrderLineDto[],
  orderDate: Date
}
