#!/usr/bin/node
function add(a, b){
    y = a + b;
    console.log(y);
   
}
add(Number(process.argv[2]),Number(process.argv[3]))
