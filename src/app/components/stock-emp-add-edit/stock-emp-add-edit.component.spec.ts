import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEmpAddEditComponent } from './stock-emp-add-edit.component';

describe('StockEmpAddEditComponent', () => {
  let component: StockEmpAddEditComponent;
  let fixture: ComponentFixture<StockEmpAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockEmpAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockEmpAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
