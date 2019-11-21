const MulMat = require("./utils.js");

let Mat1 = 
[
    [1,2],
    [3,4]
]

let Mat2 = 
[
    [5,6],
    [7,8]
]

let matrix = MulMat.MultiplyMatrix(Mat1,Mat2);
MulMat.DisplayMatrix(matrix);
