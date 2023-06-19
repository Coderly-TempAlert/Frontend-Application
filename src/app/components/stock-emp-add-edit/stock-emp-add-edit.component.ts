import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { StockService } from 'src/app/core/services/stock/stock.service';

@Component({
  selector: 'app-stock-emp-add-edit',
  templateUrl: './stock-emp-add-edit.component.html',
  styleUrls: ['./stock-emp-add-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockEmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  id!: string;
  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<StockEmpAddEditComponent>,
    private rutaActiva:ActivatedRoute,
    private stockService: StockService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.id = data != null ? data.id : '';
    this.empForm = new FormGroup({
      storeId: new FormControl<string | null>(
        {value: data != null ? this.id : '', disabled: true},
        [Validators.required, Validators.maxLength(50)]
        ),
      name: new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.maxLength(50)]
        ),
      description : new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.maxLength(100)]
        ),
      amount: new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]
        ),
      temperature: new FormControl<string | null>(
          {value: null, disabled: false},
          [Validators.required, Validators.pattern('-?[0-9]*')]
      ),      
    });
  }

  ngOnInit(): void {

    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      const productData = {
        storeId: this.id,
        name: this.empForm.value.name,
        description: this.empForm.value.description,
        amount: this.empForm.value.amount,
        temperature: this.empForm.value.temperature
      };
  
        this.stockService.createProduct(productData).subscribe((response) => {
          this._dialogRef.close(response);
        });
    }
  }  

  greaterThanToday = (d: Date | null): boolean => {
    const today = new Date();
    if (!d) {
      return false;
    }
    if (d.getDate() === today.getDate()) {
      return false;
    }
    return d < today;
  }
}
