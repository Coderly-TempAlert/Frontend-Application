import { Component } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})



export class MainComponent {
  isSideNavCollapsed = false;
  screenwidth = 0;
  onToggleSideNav(event: SideNavToggle): void {

    this.screenwidth = event.screenWidth;
    this.isSideNavCollapsed = event.collapsed;
  }
}
