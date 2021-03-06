import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryBeersComponent } from './brewery-beers.component';

describe('BreweryBeersComponent', () => {
  let component: BreweryBeersComponent;
  let fixture: ComponentFixture<BreweryBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
