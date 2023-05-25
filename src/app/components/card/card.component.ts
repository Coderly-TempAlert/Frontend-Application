import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/stores/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() store!: Store;
  @Output() deletedStore = new EventEmitter();

  constructor(
    private _dialog: MatDialog,
    private storeService: StoreService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}
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
          this.store = val;
          this.cdRef.detectChanges();
        }
      },
    });
  }

  deleteStore() {
    let _confirm = confirm('Estas seguro de eliminar esta tienda?');
    if (_confirm) {
      this.storeService.delete(this.store.id).subscribe({});
      this.deletedStore.emit();
    }
  }

  goToStock(storeId: string): void {
    this.router.navigate(['/main/stores', storeId, 'stocks']);
  }

}
