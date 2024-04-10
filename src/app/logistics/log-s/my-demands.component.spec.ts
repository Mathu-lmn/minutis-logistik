import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogSMyDemandsComponent } from './my-demands.component';

describe('LogSMyDemandsComponent', () => {
  let component: LogSMyDemandsComponent;
  let fixture: ComponentFixture<LogSMyDemandsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LogSMyDemandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogSMyDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
