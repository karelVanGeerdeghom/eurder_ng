import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {ItemDto} from "../dto/ItemDto";
import {NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingCartService} from "../../shopping/service/shopping-cart.service";

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [
    NgIf,
    PriceCurrencyPipe,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit {
  private _item: ItemDto | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.findById(this.activatedRoute.snapshot.params['id']);
  }

  findById(itemId: number) {
    this.itemService.findById(itemId).subscribe(item => this._item = item);
  }

  deleteItem(item: ItemDto) {
    this.itemService.deleteItem(item.id).subscribe(() => {
      this.router.navigateByUrl('items');
    });
  }

  addToCart(item: ItemDto) {
    this.shoppingCartService.addToCart(item);
    alert('Added to cart');
  }

  get item() {
    return this._item;
  }
}
