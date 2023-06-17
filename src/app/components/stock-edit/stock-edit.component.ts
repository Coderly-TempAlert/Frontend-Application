import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/stock.model';
import { StockService } from 'src/app/core/services/stock/stock.service';

@Component({
  selector: 'stock-edit-component',
  templateUrl: './stock-edit.component.html',
  styleUrls: ['./stock-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockEditComponent implements OnInit {
  empForm: FormGroup;

  newProduct: Product = {} as Product;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<StockEditComponent>,
    private stockService: StockService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newProduct = data != null ? data.product : [];

    this.empForm = new FormGroup({
      id: new FormControl<string | null>(
        { value: data != null ? this.newProduct.id : null, disabled: true },
        [Validators.pattern('[0-9]*')]
      ),
      name: new FormControl<string | null>(
        { value: data != null ? this.newProduct.name : null, disabled: false },
        [Validators.required, Validators.maxLength(50)]
      ),
      description: new FormControl<string | null>(
        {
          value: data != null ? this.newProduct.description : null,
          disabled: false,
        },
        [Validators.required]
      ),
      amount: new FormControl<number | null>(
        {
          value: data != null ? this.newProduct.amount : null,
          disabled: false,
        },
        [Validators.required]
      ),
      temperature: new FormControl<number | null>(
        {
          value: data != null ? this.newProduct.temperature : null,
          disabled: false,
        },
        [Validators.required]
      ),
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data == null) {
        this.stockService.createProduct(this.empForm.value).subscribe((response) => {
          this._dialogRef.close(response);
        });
      } else {

        this.stockService
          .updateProduct(this.newProduct.id, {
            name: this.empForm.value.name,
            description: this.empForm.value.description,
            amount: this.empForm.value.amount,
            temperature: this.empForm.value.temperature
          })
          .subscribe((response) => {
            this._dialogRef.close(response);
          });
      }
    }
  }
}
