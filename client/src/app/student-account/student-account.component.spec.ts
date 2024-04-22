import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAccountComponent } from './student-account.component';

describe('StudentAccountComponent', () => {
  let component: StudentAccountComponent;
  let fixture: ComponentFixture<StudentAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
