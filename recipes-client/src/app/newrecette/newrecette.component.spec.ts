import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecetteComponent } from './newrecette.component';

describe('NewrecetteComponent', () => {
  let component: NewrecetteComponent;
  let fixture: ComponentFixture<NewrecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
