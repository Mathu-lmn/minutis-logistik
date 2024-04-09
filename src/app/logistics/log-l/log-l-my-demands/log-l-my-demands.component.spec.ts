import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogLMyDemandsComponent } from './log-l-my-demands.component';

describe('LogLMyDemandsComponent', () => {
  let component: LogLMyDemandsComponent;
  let fixture: ComponentFixture<LogLMyDemandsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LogLMyDemandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogLMyDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
