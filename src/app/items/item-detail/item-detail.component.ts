import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {Item} from "../model/Item";
import {NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    NgIf,
    PriceCurrencyPipe,
    RouterLink
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  private _item: Item | undefined;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    this.getItem(this.activatedRoute.snapshot.params['id']);
  }

  getItem(itemId: number) {
    this.itemService.getItem(itemId).subscribe(item => this._item = item);
  }

  get item() {
    return this._item;
  }
}
