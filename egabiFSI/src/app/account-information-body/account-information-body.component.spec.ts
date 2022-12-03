import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInformationBodyComponent } from './account-information-body.component';

describe('AccountInformationBodyComponent', () => {
  let component: AccountInformationBodyComponent;
  let fixture: ComponentFixture<AccountInformationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountInformationBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInformationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
