import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationBodyComponent } from './personal-information-body.component';

describe('PersonalInformationBodyComponent', () => {
  let component: PersonalInformationBodyComponent;
  let fixture: ComponentFixture<PersonalInformationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalInformationBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalInformationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
