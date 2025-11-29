import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhikrList } from './dhikr-list';

describe('DhikrList', () => {
  let component: DhikrList;
  let fixture: ComponentFixture<DhikrList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhikrList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhikrList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
