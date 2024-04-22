import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBlogsComponent } from './student-blogs.component';

describe('StudentBlogsComponent', () => {
  let component: StudentBlogsComponent;
  let fixture: ComponentFixture<StudentBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentBlogsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
