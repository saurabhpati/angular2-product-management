import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
/**
 * Angular component for list of products.
 */
export class ProductListComponent implements OnInit {
    private _listFilter: string;
    private pageTitle: string;
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
     * Initializes the product list component. 
     */
    constructor() {
        this.pageTitle = 'Product List';
        this.isImageDisplayed = false;
        this.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "productId": 8,
                "productName": "Saw",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
            },
            {
                "productId": 10,
                "productName": "Video Game Controller",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
            }
        ];
        this.filteredProducts = this.products;
        //this.listFilter = '';
    }

    /**
     * Establishes life cycle hook for product list component.
     */
    ngOnInit(): void {
        // No implementation as of now.
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