import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HEADERComponent } from './header.component';

describe('HEADERComponent', () => {
  let component: HEADERComponent;
  let fixture: ComponentFixture<HEADERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HEADERComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HEADERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
