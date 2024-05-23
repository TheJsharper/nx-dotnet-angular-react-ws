import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicsListComponent } from './basics-list.component';

describe('BasicsListComponent', () => {
  let component: BasicsListComponent;
  let fixture: ComponentFixture<BasicsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
