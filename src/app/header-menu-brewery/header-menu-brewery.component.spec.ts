import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuBreweryComponent } from './header-menu-brewery.component';

describe('HeaderMenuBreweryComponent', () => {
  let component: HeaderMenuBreweryComponent;
  let fixture: ComponentFixture<HeaderMenuBreweryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenuBreweryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenuBreweryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
