import {Component, inject, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {ItemDto} from "../dto/ItemDto";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ItemNameFilterPipe} from "../pipe/item-name-filter.pipe";
import {Router, RouterLink} from "@angular/router";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";

@Component({
  selector: 'app-item-overview',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ItemNameFilterPipe,
    RouterLink,
    PriceCurrencyPipe
  ],
  templateUrl: './item-overview.component.html',
  styleUrl: './item-overview.component.css'
})
export class ItemOverviewComponent implements OnInit {
  private itemService: ItemService = inject(ItemService);

  public _items!: ItemDto[];
  public itemNameSearch: string | undefined;

  constructor(public router: Router) {}

  ngOnInit() {
    this.findAllItems();
  }

  findAllItems(): void {
    this.itemService.findAllItems().subscribe(items => this._items = items);
  }

  get items() {
    return this._items;
  }
}
