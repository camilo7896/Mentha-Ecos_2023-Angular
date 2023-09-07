import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducPageComponent } from './produc-page.component';

describe('ProducPageComponent', () => {
  let component: ProducPageComponent;
  let fixture: ComponentFixture<ProducPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
