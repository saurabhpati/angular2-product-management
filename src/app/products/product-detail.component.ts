import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css', '../shared/product-image.css']
})
/**
 * Angular component for displaying product detail.
 */
export class ProductDetailComponent implements OnInit {

  private pageTitle: string;
  private product: IProduct;

  /**
   * constructor to initialize the component class.
   */
  public constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private _productService: ProductService) {
    this.pageTitle = 'Product Detail';
  }

  /**
   * Implementation for the angular on init to initialize the angular component.
   */
  public ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this._productService.getProduct(id).subscribe(product => this.product = product);
  }

  private onBack(): void {
    this._router.navigate(['/products']);
  }

}
