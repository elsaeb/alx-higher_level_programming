#!/usr/bin/node
if(Number(process.argv[2])){
    x = process.argv[2];
 for(i=0; i<x; i++){
 console.log("C is fun");
 }
}
else {
    console.log("Missing number of occurrences")
}
