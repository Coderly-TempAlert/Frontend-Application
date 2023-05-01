import { Component, Input, OnInit } from '@angular/core';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'src/app/core/models/store.model';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() store!: Store;

  constructor(private _dialog: MatDialog) {}
  ngOnInit(): void {
    console.log(this.store);
  }

  openEditForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data: { store: this.store },
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
        }
      },
    });
  }
}
