import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionnalDesignComponent } from './traditionnal-design.component';

describe('TraditionnalDesignComponent', () => {
  let component: TraditionnalDesignComponent;
  let fixture: ComponentFixture<TraditionnalDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionnalDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionnalDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
