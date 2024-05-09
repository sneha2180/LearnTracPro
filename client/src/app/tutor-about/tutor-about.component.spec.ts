import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAboutComponent } from './tutor-about.component';

describe('TutorAboutComponent', () => {
  let component: TutorAboutComponent;
  let fixture: ComponentFixture<TutorAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
