import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stock-emp-add-edit',
  templateUrl: './stock-emp-add-edit.component.html',
  styleUrls: ['./stock-emp-add-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockEmpAddEditComponent implements OnInit {
  empForm: FormGroup;



  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<StockEmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {


    this.empForm = new FormGroup({
      id: new FormControl<string | null>(
        {value: null, disabled: true},
        [Validators.pattern('[0-9]*')]
        ),
      name: new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.maxLength(50)]
        ),
      address : new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.maxLength(100)]
        ),
      phone: new FormControl<string | null>(
        {value: null, disabled: false},
        [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(10)]
        ),
      temperature: new FormControl<string | null>(
          {value: null, disabled: false},
          [Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(4)]
      ),      
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        console.log(this.empForm.value);
      } else {
        this._dialogRef.close(this.empForm.value);
      }
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
