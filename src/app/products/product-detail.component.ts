import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
/**
 * Angular component for displaying product detail.
 */
export class ProductDetailComponent implements OnInit {

  private pageTite: string;
  private products: IProduct[];

  /**
   * constructor to initialize the component class.
   */
  public constructor() {
    this.pageTite = 'Product Detail';
  }

  /**
   * Implementation for the angular on init to initialize the angular component.
   */
  public ngOnInit(): void {
  }

}
