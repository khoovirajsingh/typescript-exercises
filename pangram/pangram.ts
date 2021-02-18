class Pangram {
    private sentence: string;
    private readonly alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    constructor(sentence: string) {
        this.sentence = sentence;
    }

    isPangram(): boolean {
        const characters = this.sentence.toLowerCase().split('');
        const reducer = (accumulator: boolean, currentValue: boolean) => accumulator && currentValue;
        return this.alphabets
            .map(alphabet => characters.includes(alphabet))
            .reduce(reducer)
    }
}

export default Pangram