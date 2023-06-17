import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/stock.model';

@Component({
  selector: 'stock-card-component',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent {

  @Input() producto!:Product;
  constructor(private _dialog: MatDialog){}

/*  openEditForm(data = null) {
    const dialogRef = this._dialog.open(StockEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
        }
      },
    });
  }*/
}
