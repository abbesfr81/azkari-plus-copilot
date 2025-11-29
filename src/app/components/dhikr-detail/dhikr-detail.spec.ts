import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhikrDetail } from './dhikr-detail';

describe('DhikrDetail', () => {
  let component: DhikrDetail;
  let fixture: ComponentFixture<DhikrDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhikrDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhikrDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
