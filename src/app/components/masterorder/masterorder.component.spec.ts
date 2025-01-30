import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterorderComponent } from './masterorder.component';

describe('MasterorderComponent', () => {
  let component: MasterorderComponent;
  let fixture: ComponentFixture<MasterorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterorderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
