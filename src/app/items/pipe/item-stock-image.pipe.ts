import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemStockImage',
  standalone: true
})
export class ItemStockImagePipe implements PipeTransform {

  transform(amountInStock: number): string {
    if (amountInStock < 5) {
      return 'warning-icon-red.png';
    }

    if (amountInStock < 10) {
      return 'warning-icon-orange.png';
    }

    return 'warning-icon-green.png';
  }

}
