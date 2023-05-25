import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, catchError, throwError } from 'rxjs';
import { EmpAddEditComponent } from 'src/app/components/emp-add-edit/emp-add-edit.component';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/stores/store.service';
import { __values } from 'tslib';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface FilteredOptions {
  id: number;
  name: string;
}

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresComponent implements OnInit {
  @Input() collapsed = false;
  isSideNavCollapsed = false;
  screenwidth = 0;
  title = 'planning';
  page = 0;

  stores: Array<Store> = [];

  //! Get all stores a veces tiene problemas para la carga y no se muestra la lista de tiendas
  ngOnInit(): void {
    this.getAllStores();
  }

  constructor(
    private _dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private storeService: StoreService
  ) {}

  onToggleSideNav(event: SideNavToggle): void {
    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }

  getAllStores() {
    this.storeService.getAll(this.page).pipe(
      catchError(err => {
        console.error('gaa', err);
        return throwError(err);
      })
    ).subscribe((response) => {
      this.stores = [...this.stores, ...response.registers];
      this.cdRef.detectChanges();
    });
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenwidth > 768) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenwidth <= 768 &&
      this.screenwidth > 0
    ) {
      styleClass = 'body-md-scree';
    }
    return styleClass;
  }

  searchTerm: string = '';
  maxLengthSearch: number = 15;

  searchStores(){
    this.page = 0;
    this.stores = [];
    this.storeService.getAll(this.page, this.searchTerm).subscribe((response) => {
      this.stores = response.registers;
      this.cdRef.detectChanges();
    });
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data: null,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.stores.push(val);
          this.cdRef.detectChanges();
        }
      },
    });
  }

  deleteStore(store: Store) {
    this.stores = this.stores.filter((s) => s.id !== store.id);
  }
}
