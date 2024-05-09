import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnrolledCourseListComponent } from './show-enrolled-course-list.component';

describe('ShowEnrolledCourseListComponent', () => {
  let component: ShowEnrolledCourseListComponent;
  let fixture: ComponentFixture<ShowEnrolledCourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEnrolledCourseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowEnrolledCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
