import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettessideComponent } from './recettesside.component';

describe('RecettessideComponent', () => {
  let component: RecettessideComponent;
  let fixture: ComponentFixture<RecettessideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettessideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettessideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
