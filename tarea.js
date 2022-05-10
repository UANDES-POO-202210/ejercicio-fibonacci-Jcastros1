const f0 = 0
const f1 = 1
fibo = []
fibo.push(f0)
fibo.push(f1)
function fibonacci(N){
    if (N === 0){
        return f0;
    } 
    if (N === 1){
        return f1;
    }
    else{
        for (x=2;x<=N+1;x++){
            var k = fibo[x-2]+fibo[x-1];
            fibo.push(k)
        }
    }   return fibo[N-2] + fibo[N-1];
}

var fs = require('fs');
let number = fs.readFileSync('N.txt', 'utf-8'); 
console.log("El numero de fibonacci es: ",fibonacci(number));

