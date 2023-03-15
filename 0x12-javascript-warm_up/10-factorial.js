#!/usr/bin/node
function rec(x){
    if (x === 0){
	return(1);
    }else
    {
	return (rec(x-1)*x);
    }
}
const x = Number(process.argv[2]);
if(x) {
    const result = rec(x);
    console.log(result);
}else{
    console.log(1);
}
