import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleProfileComponent } from './bubble-profile.component';

describe('BubbleProfileComponent', () => {
  let component: BubbleProfileComponent;
  let fixture: ComponentFixture<BubbleProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BubbleProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BubbleProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
