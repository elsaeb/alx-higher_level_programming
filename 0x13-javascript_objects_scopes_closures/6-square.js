#!/usr/bin/node
const Square = require('./5-square');
class Square extends Square{
    charprint(c){
	if(!c){
	    c = "X";
	}
	this.print(c);
    }}
module.exports = Square;
