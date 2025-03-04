import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterStickyTableComponent } from './footer-sticky-table.component';

describe('FooterStickyTableComponent', () => {
  let component: FooterStickyTableComponent;
  let fixture: ComponentFixture<FooterStickyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterStickyTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterStickyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
