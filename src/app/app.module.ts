import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }