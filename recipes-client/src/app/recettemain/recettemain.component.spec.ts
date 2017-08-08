import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettemainComponent } from './recettemain.component';

describe('RecettemainComponent', () => {
  let component: RecettemainComponent;
  let fixture: ComponentFixture<RecettemainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecettemainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
