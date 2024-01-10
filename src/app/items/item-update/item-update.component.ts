import {Component, OnInit} from '@angular/core';
import {ItemDto} from "../dto/ItemDto";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {NgForOf, NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemNameFilterPipe} from "../pipe/item-name-filter.pipe";

@Component({
  selector: 'app-item-update',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    PriceCurrencyPipe,
    FormsModule,
    ItemNameFilterPipe,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit {
  private _item: ItemDto | undefined;
  private _itemForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    priceAmount: [0.0, [Validators.required]],
    amountInStock: [0, [Validators.required]],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private itemService: ItemService,
    private router: Router) {}

  ngOnInit() {
    this.getItem(this.activatedRoute.snapshot.params['id']);
  }

  getItem(itemId: number) {
    this.itemService.findById(itemId).subscribe(item => {
      this._item = item;
      this._itemForm.controls['name'].patchValue(this._item!.name);
      this._itemForm.controls['description'].patchValue(this._item!.description);
      this._itemForm.controls['priceAmount'].patchValue(this._item!.price.amount);
      this._itemForm.controls['amountInStock'].patchValue(this._item!.amountInStock);
    });
  }

  updateItem(item: ItemDto) {
    if (this._itemForm.valid) {
      let updateItemDto = {
        name: this._itemForm.value.name!,
        description: this._itemForm.value.description!,
        price: {
          amount: this._itemForm.value.priceAmount!,
          currency: this._item!.price.currency,
        },
        amountInStock: this._itemForm.value.amountInStock!,
      }

      this.itemService.updateItem(item.id, updateItemDto).subscribe(item => {
        this.router.navigateByUrl(`items/${item.id}`);
      });
    }
  }

  get item() {
    return this._item;
  }

  get itemForm() {
    return this._itemForm;
  }
}
