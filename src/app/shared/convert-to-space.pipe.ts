import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})
/**
 * Custom pipe class to convert incoming strings containing a replacable character to a space.
 */
export class ConvertToSpacePipe implements PipeTransform {

    /**
     * Accepts a string with any character from the template and returns a more user readable format 
     * with space.
     * e.g. gsd-432 --> gsd 432
     * @param value The string to be transformed, e.g. In this case 'gsd-432'.
     * @param args The value(s) in the value to be transformed, e.g. In this case '-'.
     */
    public transform(value: any, ...args: any[]) {
        return value.replace(args, ' ');
    }

}