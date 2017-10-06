import { Component } from "@angular/core";
import { ProductService } from "./products/products.service";

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: String = 'Product Management Application';
}
