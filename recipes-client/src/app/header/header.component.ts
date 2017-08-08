import { Component, ViewChild } from '@angular/core';
import { TabsetComponent } from 'ng2-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  selectTab(tab_id: number) {
      this.staticTabs.tabs[tab_id].active = true;
  }
}
