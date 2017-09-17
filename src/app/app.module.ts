import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacePipe } from "./shared/convert-to-space.pipe";
import { StarComponent } from "./shared/star.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent, 
    ProductListComponent, 
    ConvertToSpacePipe, 
    StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }