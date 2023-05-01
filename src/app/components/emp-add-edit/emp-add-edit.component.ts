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
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/stores/store.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;

  newStore: Store = {} as Store;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    private storeService: StoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newStore = data != null ? data.store : [];

    this.empForm = new FormGroup({
      id: new FormControl<string | null>(
        { value: data != null ? this.newStore.id : null, disabled: true },
        [Validators.pattern('[0-9]*')]
      ),
      name: new FormControl<string | null>(
        { value: data != null ? this.newStore.name : null, disabled: false },
        [Validators.required, Validators.maxLength(50)]
      ),
      address: new FormControl<string | null>(
        { value: data != null ? this.newStore.address : null, disabled: false },
        [Validators.required, Validators.maxLength(100)]
      ),
      description: new FormControl<string | null>(
        {
          value: data != null ? this.newStore.description : null,
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
        this.storeService.create(this.empForm.value).subscribe((response) => {
          this._dialogRef.close(response);
        });
      } else {
        this.storeService
          .update(this.newStore.id, {
            name: this.empForm.value.name,
            description: this.empForm.value.description,
            address: this.empForm.value.address,
          })
          .subscribe((response) => {
            this._dialogRef.close(response);
          });
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
  };
}
