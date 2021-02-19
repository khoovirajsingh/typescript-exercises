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
        this.columns = this.rows[0].map((_, colIndex) =>
            this.rows.map((row) => row[colIndex])
        )
    }
}

export default Matrix
