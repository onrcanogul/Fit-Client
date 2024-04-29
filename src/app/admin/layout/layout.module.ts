import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule ,
    MatSidenavModule,
    RouterModule
  ],
  exports:[LayoutComponent]
})
export class LayoutModule { }
