import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
/**
 * The service that gets data related to products.
 */
export class ProductService {

    private _products: IProduct[];
    private _productsUrl: string;

    /**
     * Constructor to initialize the product service class.
     */
    public constructor(private _http: HttpClient) {
        this._productsUrl = './api/products/products.json'
    }

    /**
     * getProducts: Gets the list of all products for the products list.
     */
    public getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productsUrl)
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.errorHandler);
    }

    private errorHandler(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}