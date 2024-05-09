import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorDiscussionsComponent } from './tutor-discussions.component';

describe('TutorDiscussionsComponent', () => {
  let component: TutorDiscussionsComponent;
  let fixture: ComponentFixture<TutorDiscussionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorDiscussionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorDiscussionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
