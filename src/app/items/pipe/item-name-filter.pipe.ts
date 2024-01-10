import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/Item";

@Pipe({
  name: 'itemNameFilter',
  standalone: true
})
export class ItemNameFilterPipe implements PipeTransform {

  transform(items: Item[] | null, nameFilter: string | undefined): Item[] | null {
    if (items !== null && nameFilter !== undefined) {
      return items.filter(item => item.name.toLocaleLowerCase().indexOf(nameFilter.toLocaleLowerCase()) === 0);
    }

    return items;
  }

}
