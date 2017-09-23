import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./products.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
/**
 * Angular component for list of products.
 */
export class ProductListComponent implements OnInit {
    private _listFilter: string;
    private pageTitle: string;
    private _errorMessage: string
    private isImageDisplayed: Boolean;
    private products: IProduct[];
    private filteredProducts: IProduct[];

    /**
     * Gets the list of filters by which the products list is being filtered by.
     */
    private get listFilter(): string {
        return this._listFilter;
    }

    /**
     * Sets the list of filters by which the products list is being filtered by.
     */
    private set listFilter(value: string) {
        this._listFilter = value.toLowerCase();
        this.filteredProducts = this.listFilter ?
            this.products.filter(product => this._filterBy(product.productName)) : this.products;
        
        // If the filtered products are not found by name, find it by product code.
        if (this.filteredProducts && !this.filteredProducts.length) {
            this.filteredProducts = this.products.filter(product => this._filterBy(product.productCode));
        }
    }

    /**
     * The constructor to initialize the product list component.
     * @param productService The product service that gets data related to products.
     */
    public constructor(private productService: ProductService) {
        this.pageTitle = 'Product List';
        this.isImageDisplayed = false;
    }
    
    /**
     * Establishes life cycle hook for product list component.
     */
    public ngOnInit(): void {
        this.productService.getProducts().subscribe(products => {
            this.products = products;
            this.filteredProducts = this.products;
        }, error => this._errorMessage = <any>error);
    }

    /**
     * Toggles i.e. shows and hides images on click of the button.
     * @param event {Object} The click event object.
     */
    private toggleImage(event): void {
        this.isImageDisplayed = !this.isImageDisplayed;

        if (event && event.target) {
            event.target.innerText = this.isImageDisplayed ? 'Hide Images' : 'Show Images';
        }
    }

    /**
     * The event fired when rating is clicked from the nested component.
     * @param $event The data emitted from the nested component.
     */
    private onRatingClick($event): void {
        if (!$event) {
            return;
        }

        this.pageTitle = 'Product List';
        this.pageTitle += $event;
    }

    /**
     * Filters the filteree by list filter value.
     * @param filteree The value that is being filtered.
     */
    private _filterBy(filteree: string): Boolean {
        if (!filteree) {
            return false;
        }

        filteree = filteree.toLowerCase();
        return filteree.indexOf(this.listFilter) !== -1;
    }
}