import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiscussionsComponent } from './student-discussions.component';

describe('StudentDiscussionsComponent', () => {
  let component: StudentDiscussionsComponent;
  let fixture: ComponentFixture<StudentDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDiscussionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
