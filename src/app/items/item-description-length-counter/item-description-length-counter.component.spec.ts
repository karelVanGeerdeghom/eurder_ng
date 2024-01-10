import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDescriptionLengthCounterComponent } from './item-description-length-counter.component';

describe('ItemDescriptionLengthCounterComponent', () => {
  let component: ItemDescriptionLengthCounterComponent;
  let fixture: ComponentFixture<ItemDescriptionLengthCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDescriptionLengthCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemDescriptionLengthCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
