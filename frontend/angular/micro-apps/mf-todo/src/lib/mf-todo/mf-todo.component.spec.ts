import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MfTodoComponent } from './mf-todo.component';

describe('MfTodoComponent', () => {
  let component: MfTodoComponent;
  let fixture: ComponentFixture<MfTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfTodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MfTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
