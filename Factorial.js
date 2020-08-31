function factorial(n){
    var i;
    for(i=n-1; i>0; i--){
        n*=i;
}
    return n;
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}
