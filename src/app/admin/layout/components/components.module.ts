import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
