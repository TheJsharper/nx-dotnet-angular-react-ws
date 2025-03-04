import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlotlyViewComponent } from './plotly-view.component';

describe('PlotlyViewComponent', () => {
  let component: PlotlyViewComponent;
  let fixture: ComponentFixture<PlotlyViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlotlyViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlotlyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
