/**
 * Contract specifying that a product should contain these properties.
 */
export interface IProduct {
    productId: Number;
    productName: String;
    productCode: String;
    releaseDate: String;
    description: String;
    price: Number;
    starRating: Number;
    imageUrl: String;
}