import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatssideComponent } from './platsside.component';

describe('PlatssideComponent', () => {
  let component: PlatssideComponent;
  let fixture: ComponentFixture<PlatssideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatssideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatssideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
