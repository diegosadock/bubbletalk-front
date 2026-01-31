import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticStoreComponent } from './cosmetic-store.component';

describe('CosmeticStoreComponent', () => {
  let component: CosmeticStoreComponent;
  let fixture: ComponentFixture<CosmeticStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CosmeticStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CosmeticStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
