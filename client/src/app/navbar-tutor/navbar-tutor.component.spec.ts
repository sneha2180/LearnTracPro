import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTutorComponent } from './navbar-tutor.component';

describe('NavbarTutorComponent', () => {
  let component: NavbarTutorComponent;
  let fixture: ComponentFixture<NavbarTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarTutorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
