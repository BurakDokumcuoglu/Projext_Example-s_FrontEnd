import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [      // app.component.html'deki routeroutlet taginde ne gösterilecek burada belirtiyoruz(hangi component)
  {path:"",pathMatch:"full",component:ProductComponent}, // "" localhost:4200'den sonra hiçbirşey yazılmazsa anlamındadır
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId",component:ProductComponent}               //"products" localhost:4200'den sonra /products yazılırsa anlamındadır
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
