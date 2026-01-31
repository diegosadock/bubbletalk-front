import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleHome2Component } from './bubble-home.component';

describe('BubbleHome2Component', () => {
  let component: BubbleHome2Component;
  let fixture: ComponentFixture<BubbleHome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BubbleHome2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleHome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
