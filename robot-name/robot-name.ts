export default class Robot {
  private readonly letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  private readonly numbers = "0123456789"
  public name: string;
  public usedNames: string[] = [];

  constructor() {
    this.name = this.generateName();
  }

  public resetName(): void {
    let candidate: string;

    do {
      candidate = this.generateName();
    } while (this.usedNames.includes(candidate));

    this.name = candidate;
    this.usedNames = [...this.usedNames, candidate];
  }

  public static releaseNames(): void {
    this.usedNames = [];
  }

  private generateName: () => string = () => {
    const twoRandomLetters = `${this.randomLetter()}${this.randomLetter()}`;
    const threeRandomNumbers = `${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}`;
    return `${twoRandomLetters}${threeRandomNumbers}`;
  };

  private randomLetter: () => string = () => this.letters.charAt(this.getRandomNumber(this.letters.length));

  private randomNumber: () => string = () => this.numbers.charAt(this.getRandomNumber(this.numbers.length));

  private getRandomNumber: (length: number) => number = (length: number) => Math.floor(Math.random() * length);
}
