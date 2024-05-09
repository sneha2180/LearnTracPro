import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorBlogComponent } from './tutor-blog.component';

describe('TutorBlogComponent', () => {
  let component: TutorBlogComponent;
  let fixture: ComponentFixture<TutorBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
