import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceCurrency',
  standalone: true
})
export class PriceCurrencyPipe implements PipeTransform {

  transform(currency: string | null): string | null {
    switch (currency) {
      case 'EUR': return '€';
    }

    return null;
  }

}
