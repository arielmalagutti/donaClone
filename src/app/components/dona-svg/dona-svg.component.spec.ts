import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonaSvgComponent } from './dona-svg.component';

describe('DonaSvgComponent', () => {
  let component: DonaSvgComponent;
  let fixture: ComponentFixture<DonaSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonaSvgComponent],
    });
    fixture = TestBed.createComponent(DonaSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
