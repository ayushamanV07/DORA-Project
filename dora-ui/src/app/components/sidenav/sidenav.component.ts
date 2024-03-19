import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from '../home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IdentityComponent } from '../modules/identity/identity.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule,RouterOutlet,MatSidenavModule,MatListModule, CommonModule, MatIconModule,MatToolbarModule,HomeComponent,IdentityComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }
}
