import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularVersionComponent } from './angular-version.component';

describe('AngularVersionComponent', () => {
  let component: AngularVersionComponent;
  let fixture: ComponentFixture<AngularVersionComponent>;

  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports: [AngularVersionComponent]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AngularVersionComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
