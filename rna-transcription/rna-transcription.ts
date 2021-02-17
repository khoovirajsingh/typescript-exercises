class Transcriptor {
  private dnaToRna = new Map([
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'U'],
      ['T', 'A'],
  ]);

  private isValidDna = (dna: string) => this.dnaToRna.has(dna);

  toRna(dnaStrand: string) {
    const dnaStrands = dnaStrand.split('');
    if (!dnaStrands.every(this.isValidDna)) throw  new Error('Invalid input DNA.');
    return dnaStrands
        .map(dna => this.dnaToRna.get(dna))
        .join('');
  }
}

export default Transcriptor
