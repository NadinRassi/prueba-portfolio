import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageItemsComponent } from './image-items.component';



@NgModule({
  declarations: [
    ImageItemsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ImageItemsComponent]
})
export class ImageItemsModule { }
