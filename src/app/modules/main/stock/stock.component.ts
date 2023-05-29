import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { StockEmpAddEditComponent } from 'src/app/components/stock-emp-add-edit/stock-emp-add-edit.component';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

interface FilteredOptions{
  id: number;
  name: string;
}

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockComponent {
  title = 'planning';

  isSideNavCollapsed = false;
  screenwidth = 0;

  constructor(private _dialog: MatDialog){}

  onToggleSideNav(event: SideNavToggle): void{
    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }

  @Input() collapsed =false;


  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenwidth > 768) {
      styleClass = 'body-trimmed';
    }else if (this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0) {
      styleClass = 'body-md-scree'
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
    const dialogRef = this._dialog.open(StockEmpAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
        }
      },
    });
  }
}
