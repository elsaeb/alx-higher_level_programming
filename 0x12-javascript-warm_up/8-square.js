#!/usr/bin/node
if(Number(process.argv[2])){
  
    y = process.argv[2]
  
    for (i = 0; i<y; i++){
	  z = "";
    
	for (j = 0; j<y; j++){
	    z='X'+z
	   
	} console.log(z);
        }
    
}
else {  
 console.log("Missing size");
}
