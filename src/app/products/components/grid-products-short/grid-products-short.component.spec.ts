import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridProductsShortComponent } from './grid-products-short.component';

describe('GridProductsShortComponent', () => {
  let component: GridProductsShortComponent;
  let fixture: ComponentFixture<GridProductsShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridProductsShortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridProductsShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
