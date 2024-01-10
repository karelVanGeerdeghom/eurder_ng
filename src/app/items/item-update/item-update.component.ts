import {Component, OnInit} from '@angular/core';
import {ItemDto} from "../dto/ItemDto";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {ItemService} from "../service/item.service";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {PriceCurrencyPipe} from "../../price/pipe/price-currency.pipe";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ItemNameFilterPipe} from "../pipe/item-name-filter.pipe";
import {
  ItemDescriptionLengthCounterComponent
} from "../item-description-length-counter/item-description-length-counter.component";

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
    ReactiveFormsModule,
    ItemDescriptionLengthCounterComponent,
    NgClass
  ],
  templateUrl: './item-update.component.html',
  styleUrl: './item-update.component.css'
})
export class ItemUpdateComponent implements OnInit {
  private _itemDto: ItemDto | undefined;
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
      this._itemDto = item;
      this._itemForm.controls['name'].patchValue(this._itemDto!.name);
      this._itemForm.controls['description'].patchValue(this._itemDto!.description);
      this._itemForm.controls['priceAmount'].patchValue(this._itemDto!.price.amount);
      this._itemForm.controls['amountInStock'].patchValue(this._itemDto!.amountInStock);
    });
  }

  updateItem(itemDto: ItemDto) {
    if (this._itemForm.valid) {
      let updateItemDto = {
        name: this._itemForm.value.name!,
        description: this._itemForm.value.description!,
        price: {
          amount: this._itemForm.value.priceAmount!,
          currency: this._itemDto!.price.currency,
        },
        amountInStock: this._itemForm.value.amountInStock!,
      }

      this.itemService.updateItem(itemDto.id, updateItemDto).subscribe(itemDto => {
        this.router.navigateByUrl(`items/${itemDto.id}`);
      });
    }
  }

  get itemDto() {
    return this._itemDto;
  }

  get itemForm() {
    return this._itemForm;
  }

  get name() {
    return this._itemForm.get('name');
  }

  get description() {
    return this._itemForm.get('description');
  }

  get priceAmount() {
    return this._itemForm.get('priceAmount');
  }

  get amountInStock() {
    return this._itemForm.get('amountInStock');
  }
}
