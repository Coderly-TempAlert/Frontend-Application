import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirmDialog/confirm-dialog.component';
import { Alert } from 'src/app/core/models/alert.model';
import { DatePipe } from '@angular/common';
import { AlertService } from 'src/app/core/services/alert/alert.service';

@Component({
  selector: 'alert-component',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{
  @Input() alert: Alert | undefined;

  constructor(public dialog: MatDialog, private datePipe: DatePipe, private alertService: AlertService) { }
  ngOnInit(): void {

  }

  formatDate(date: Date): string {
    const newDate = new Date(date);
    const formattedDate = this.datePipe.transform(newDate, 'dd/MM/yyyy');
    const formattedTime = this.datePipe.transform(newDate, 'HH:mm');

    return `Fecha: ${formattedDate}  Hora: ${formattedTime}`;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { alert: this.alert }
    });

    dialogRef.afterClosed().subscribe(alert => {
      if(alert) {
        this.alertService.deleteAlert(alert.id).subscribe(() => {
          alert('Alerta eliminada')
        });
      }
    });

  }
}
