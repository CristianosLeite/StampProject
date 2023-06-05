import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStampComponent } from './card-stamp.component';

describe('CardStampComponent', () => {
  let component: CardStampComponent;
  let fixture: ComponentFixture<CardStampComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStampComponent]
    });
    fixture = TestBed.createComponent(CardStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
