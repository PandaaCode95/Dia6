let res ;

function suma2 (x,y,z){
     res = x+ y+z;
    return res;
}

// function suma (x,y){
//      res = x+ y;
//     return res;
// }

function rest (x,y){
     res = x- y;
    return res;
}
function mul (x,y){
     res = x * y;
    return res;
}
function div (x,y){
     res = x / y;
    return res;
}
function sqrt(x){
    res = Math.sqrt(x);
    return res;

}
module.exports = { rest, mul, div};