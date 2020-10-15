import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexconverterComponent } from './forexconverter.component';

describe('ForexconverterComponent', () => {
  let component: ForexconverterComponent;
  let fixture: ComponentFixture<ForexconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForexconverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
