import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsProductsComponent } from './icons-products.component';

describe('IconsProductsComponent', () => {
  let component: IconsProductsComponent;
  let fixture: ComponentFixture<IconsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
