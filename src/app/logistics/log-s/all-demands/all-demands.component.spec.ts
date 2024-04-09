import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogSAllDemandsComponent } from './all-demands.component';

describe('LogSAllDemandsComponent', () => {
  let component: LogSAllDemandsComponent;
  let fixture: ComponentFixture<LogSAllDemandsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LogSAllDemandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogSAllDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
