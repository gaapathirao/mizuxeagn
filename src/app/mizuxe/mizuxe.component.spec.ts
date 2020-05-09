import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MizuxeComponent } from './mizuxe.component';

describe('MizuxeComponent', () => {
  let component: MizuxeComponent;
  let fixture: ComponentFixture<MizuxeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MizuxeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MizuxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
