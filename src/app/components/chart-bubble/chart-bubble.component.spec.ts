import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBubbleComponent } from './chart-bubble.component';

describe('ChartBubbleComponent', () => {
  let component: ChartBubbleComponent;
  let fixture: ComponentFixture<ChartBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartBubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
