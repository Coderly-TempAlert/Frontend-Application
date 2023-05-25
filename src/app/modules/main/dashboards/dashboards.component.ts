import { AlertService } from './../../../core/services/alert/alert.service';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Alert } from 'src/app/core/models/alert.model';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit , OnDestroy{
  alerts: Array<Alert> = [];
  private intervalId?: number;



  showFiller = false;
  @Input() collapsed = false;
  isSideNavCollapsed = false;
  screenwidth = 0;
  page = 0;

  constructor(
    private alertService: AlertService,
    private cdRef: ChangeDetectorRef,
  ){}

  ngOnInit(): void {
    this.getAllAlerts();
    //! AQUI SE DEBE OBTENER LAS ALERTAS CONSTANTEMENTE
    /*
    this.intervalId = window.setInterval(() => {
      this.getAllAlerts();
    }, 5000);
    */
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
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

  getAllAlerts() {
    this.alertService.getAllAlerts().subscribe((response) => {
      this.alerts = [];
      this.alerts = [...this.alerts, ...response.registers];
      this.cdRef.detectChanges();
    });
  }


}
