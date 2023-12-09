import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsSummaryComponent } from './animals-summary.component';

describe('AnimalsSummaryComponent', () => {
  let component: AnimalsSummaryComponent;
  let fixture: ComponentFixture<AnimalsSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalsSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimalsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
