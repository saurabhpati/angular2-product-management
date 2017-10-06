import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './products.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacePipe
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
