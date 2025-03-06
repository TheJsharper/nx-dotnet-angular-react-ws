import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimengTableProductComponent } from './primeng-table-product.component';

describe('PrimengTableProductComponent', () => {
  let component: PrimengTableProductComponent;
  let fixture: ComponentFixture<PrimengTableProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTableProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimengTableProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
