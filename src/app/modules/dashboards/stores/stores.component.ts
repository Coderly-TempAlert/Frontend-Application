import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { EmpAddEditComponent } from 'src/app/components/emp-add-edit/emp-add-edit.component';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/stores/store.service';

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

  title = 'planning';

  isSideNavCollapsed = false;
  screenwidth = 0;
  stores: Array<Store> = [];

  //! Get all stores a veces tiene problemas para la carga y no se muestra la lista de tiendas
  ngOnInit(): void {
    this.getAllStores();
  }

  constructor(private _dialog: MatDialog, private storeService: StoreService) {}

  onToggleSideNav(event: SideNavToggle): void {
    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }

  getAllStores() {
    this.storeService.getAll().subscribe((response) => {
      this.stores = response.registers;
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

  selectOptionVal: number = 0;
  selectTypeDocVal: number = 0;
  tempOptions: Array<FilteredOptions> = [];
  searchTerm: string = '';
  search: Subject<void> = new Subject<void>();
  maxLengthSearch: number = 15;
  filterBy: Subject<string> = new Subject<string>();

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data: null
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.stores.push(val);
        }
      },
    });
  }
}
