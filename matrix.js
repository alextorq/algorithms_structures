class Matrix {
    constructor(rows = 0, cols = 0) {
        this.matrix = [];
        for(let row = 0; row < rows; row++) {
            let rowMatrix = [];

            for(let col = 0; col < cols; col++) {
                let colMatrix = 0;
                rowMatrix.push(colMatrix);
            }
            this.matrix.push(rowMatrix);
        }
    }

    getValue(row, col) {
        //Проверки
        return this.matrix[row][col];
    }
    setValue(row, col, value) {
        //Проверки
        this.matrix[row][col] = value;
    }
}


let matr = new Matrix(5, 5);
console.log(matr);