import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasbihCounter } from './tasbih-counter';

describe('TasbihCounter', () => {
  let component: TasbihCounter;
  let fixture: ComponentFixture<TasbihCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasbihCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasbihCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
