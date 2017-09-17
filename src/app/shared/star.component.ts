import { Component, OnChanges, SimpleChanges, Input } from "@angular/core";

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

    /**
     * Detects a change in the rating from parent component through the input parameter and applies
     * that change in the nested component.
     * @param changes The changes parameter as part of OnChanges implementation
     */
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 86 / 5;
    }
}