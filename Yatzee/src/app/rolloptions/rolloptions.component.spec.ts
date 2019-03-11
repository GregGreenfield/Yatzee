import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolloptionsComponent } from './rolloptions.component';

describe('RolloptionsComponent', () => {
  let component: RolloptionsComponent;
  let fixture: ComponentFixture<RolloptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolloptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolloptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
