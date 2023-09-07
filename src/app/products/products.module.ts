import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridProductsShortComponent } from './components/grid-products-short/grid-products-short.component';
import { ProducPageComponent } from './pages/produc-page/produc-page.component';



@NgModule({
  declarations: [
    GridProductsShortComponent,
    ProducPageComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    GridProductsShortComponent,
    ProducPageComponent
  ]
})
export class ProductsModule { }
