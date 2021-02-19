class Matrix {
    rows: number[][] = [];
    columns: number[][] = [];
    private lines: string[];

    constructor(public matrix: string) {
        this.lines = matrix.split('\n');
        this.generateMatrix();
    }

    private generateMatrix() {
        this.generateRows();
        this.generateColumns();
    }

    private generateRows() {
        const toRows = (line: string) => line.split(' ')
            .map(character => Number(character));
        this.rows = this.lines.map(toRows);
    }

    private generateColumns() {
        for (let i = 0; i < this.rows[0].length; i++) {
            this.columns.push([]);
            for (const row of this.rows) {
                this.columns[i].push(row[i]);
            }
        }
    }
}

export default Matrix
