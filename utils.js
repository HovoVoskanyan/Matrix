function MultiplyMatrix(Mat1,Mat2)
{
    let sum=0;
    if(Mat1[1].length != Mat2.length)
    {
        return null;
    }

    
    let result=[] ;
    for(let i=0; i<Mat1.length;i++)
    {
        result.push([]) 
        for(let j=0;j<Mat2[0].length;j++){
            result[i].push(0);
        }
        
    }


    for(let i=0; i<Mat1.length;i++)
    {
        for(let j=0;j<Mat2[0].length;j++)
        {
             sum =0;
           for (let k = 0; k < Mat1[0].length; k++) {
              sum += Mat1[i][k] *Mat2[k][j];

           }
           
           result[i][j] = sum;

        }
    }
    return result;
}

function DisplayMatrix (matrix)
{
    let result = "";
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            result += matrix[i][j] + "\t";
        }
    
        result += "\n";
    
    }

    console.log(result);
    return;
}
module.exports=
{
    MultiplyMatrix,
    DisplayMatrix
}
