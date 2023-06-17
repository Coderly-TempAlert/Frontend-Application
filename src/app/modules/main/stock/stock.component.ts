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
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, catchError, throwError } from 'rxjs';
import { StockEmpAddEditComponent } from 'src/app/components/stock-emp-add-edit/stock-emp-add-edit.component';
import { Product } from 'src/app/core/models/stock.model';
import { StockEditComponent } from 'src/app/components/stock-edit/stock-edit.component';
import { StockService } from 'src/app/core/services/stock/stock.service';
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
export class StockComponent implements OnInit{
  title = 'planning';
  isSideNavCollapsed = false;
  screenwidth = 0;
  page = 0;
  products: Array<Product> = [];
  id!:string;
  productSelected!: Product;


  @Input() collapsed =false;


  selectOptionVal: number = 0;
  selectTypeDocVal: number = 0;
  tempOptions: Array<FilteredOptions> = [];
  searchTerm: string = '';
  search: Subject<void>;
  maxLengthSearch: number = 15;
  filterBy: Subject<string>;

  constructor(private _dialog: MatDialog, private stockService: StockService,
    private rutaActiva:ActivatedRoute,
    private cdRef: ChangeDetectorRef){
      this.search = new Subject<void>();
      this.filterBy = new Subject<string>();
    }


  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      }
    );
     this.getProductByStore(this.id);
  }

  onToggleSideNav(event: SideNavToggle): void{
    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenwidth > 768) {
      styleClass = 'body-trimmed';
    }else if (this.collapsed && this.screenwidth <= 768 && this.screenwidth > 0) {
      styleClass = 'body-md-scree'
    }
    return styleClass;
  }


  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(StockEmpAddEditComponent, {
      data: { id: this.id}
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
        }
      },
    });
  }

  getProductByStore(idStore: string){
    this.products = [];
    this.stockService.getStoreProducts(idStore).pipe(
      catchError(err => {
        console.error('gaa', err);
        return throwError(err);
      })
    ).subscribe((response)=>{
      for(let p of response.registers){
        this.products.push(p.product);
      }
    })
  }

  getProductSelect(idProduct: string){
    this.stockService.getProduct(idProduct).subscribe({
      next: (data: Product)=>{
        const selectedProduct = {
          id:data.id,
          name:data.name,
          description:data.description,
          amount:data.amount,
          temperature: data.temperature
        };
        this.productSelected = data;
        console.log('esta es primero:', this.productSelected);
      }
    })
  }

  openEditForm(producto:Product) {
    const dialogRef = this._dialog.open(StockEditComponent, {
      data: { product: producto},
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log(val);
          this.getProductByStore(this.id);
          this.cdRef.detectChanges();
        }
      },
    });
  
  }


  deleteProduct(producto:Product) {
    let _confirm = confirm('Estas seguro de eliminar este producto?');
    if (_confirm) {
      this.stockService.deleteProduct(producto.id).subscribe({});
      this.getProductByStore(this.id);
    }
  }


}
