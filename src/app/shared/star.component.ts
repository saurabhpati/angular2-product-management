import { Component, OnChanges, SimpleChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})
/**
 * The nestable component that can be used to display stars.
 */
export class StarComponent implements OnChanges {
    @Input() private rating: number;
    private starWidth: number;
    @Output() private ratingEmitter : EventEmitter<string>;

    /**
     * Constructor to initialize the star component
     */
    constructor() {
        this.ratingEmitter = new EventEmitter<string>();
    }

    /**
     * Detects a change in the rating from parent component through the input parameter and applies
     * that change in the nested component.
     * @param changes The changes parameter as part of OnChanges implementation
     */
    public ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5;
    }

    /**
     * The event fired on the click on the star section of the products.
     */
    private onClick(): void {
        this.ratingEmitter.emit(`rating with ${this.rating} was clicked!`);
    }
}