import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCanvasNavComponent } from './off-canvas-nav.component';

describe('OffCanvasNavComponent', () => {
  let component: OffCanvasNavComponent;
  let fixture: ComponentFixture<OffCanvasNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCanvasNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCanvasNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
