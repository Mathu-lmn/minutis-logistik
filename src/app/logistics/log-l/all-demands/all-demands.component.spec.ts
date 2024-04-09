import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogLAllDemandsComponent } from './all-demands.component';

describe('AllDemandsComponent', () => {
  let component: LogLAllDemandsComponent;
  let fixture: ComponentFixture<LogLAllDemandsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LogLAllDemandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogLAllDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
