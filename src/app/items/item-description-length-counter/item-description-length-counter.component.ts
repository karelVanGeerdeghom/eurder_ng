import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-item-description-length-counter',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './item-description-length-counter.component.html',
  styleUrl: './item-description-length-counter.component.css'
})
export class ItemDescriptionLengthCounterComponent {
  @Input() description!: string;
}
