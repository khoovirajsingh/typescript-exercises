export class ResistorColor {
    private readonly colors: string[]
    private colorMap = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white'
    ];

    constructor(colors: string[]) {
        const notEnoughColors = colors.length < 2;
        if (notEnoughColors) throw new Error('At least two colors need to be present');
        this.colors = colors;
    }

    value = (): number => {
        const firstResistor = this.colorMap.indexOf(this.colors[0]);
        const secondResistor = this.colorMap.indexOf(this.colors[1]);
        return Number(`${firstResistor}${secondResistor}`);
    }
}
