import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransactionsBodyComponent } from './view-transactions-body.component';

describe('ViewTransactionsBodyComponent', () => {
  let component: ViewTransactionsBodyComponent;
  let fixture: ComponentFixture<ViewTransactionsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransactionsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransactionsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
