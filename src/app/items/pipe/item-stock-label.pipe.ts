import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemStockLabel',
  standalone: true
})
export class ItemStockLabelPipe implements PipeTransform {

  transform(amountInStock: number): string {
    if (amountInStock < 5) {
      return 'Low';
    }

    if (amountInStock < 10) {
      return 'Medium';
    }

    return 'High';
  }

}
