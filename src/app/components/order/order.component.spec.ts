import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ORDERComponent } from './order.component';

describe('ORDERComponent', () => {
  let component: ORDERComponent;
  let fixture: ComponentFixture<ORDERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ORDERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ORDERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
