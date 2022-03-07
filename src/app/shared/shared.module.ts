import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './component/navigation/navigation.component';
import { DropdownComponent } from './component/dropdown/dropdown.component';

@NgModule({
  declarations: [
    NavigationComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigationComponent,DropdownComponent]
})
export class SharedModule { }
