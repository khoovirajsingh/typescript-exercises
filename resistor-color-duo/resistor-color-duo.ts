export class ResistorColor {
    private readonly colors: string[]
    private colorToValue = new Map([
        ['black', 0],
        ['brown', 1],
        ['red', 2],
        ['orange', 3],
        ['yellow', 4],
        ['green', 5],
        ['blue', 6],
        ['violet', 7],
        ['grey', 8],
        ['white', 9]
    ]);

    constructor(colors: string[]) {
        this.colors = colors
        const notEnoughColors = this.colors.length < 2;
        if (notEnoughColors) throw new Error('At least two colors need to be present');
    }

    private readonly INVALID_VALUES = 99;
    value = (): number => {
        const firstResistor = this.colorToValue.get(this.colors[0]);
        const secondResistor = this.colorToValue.get(this.colors[1]);
        const colorsAreValid = firstResistor != undefined && secondResistor != undefined;
        if (colorsAreValid) return +`${firstResistor}${secondResistor}`;
        return this.INVALID_VALUES;
    }
}
