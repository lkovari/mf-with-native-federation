import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LkCommonLibComponent } from './lk-common-lib.component';

describe('LkCommonLibComponent', () => {
  let component: LkCommonLibComponent;
  let fixture: ComponentFixture<LkCommonLibComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [LkCommonLibComponent]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LkCommonLibComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
