import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailShellComponent } from './work-detail-shell.component';

describe('WorkDetailShellComponent', () => {
  let component: WorkDetailShellComponent;
  let fixture: ComponentFixture<WorkDetailShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
