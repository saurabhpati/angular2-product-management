/**
 * Contract specifying that a product should contain these properties.
 */
export interface IProduct {
    productId: Number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: Number;
    starRating: Number;
    imageUrl: string;
}