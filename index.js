//
// string-padder
// Utility library which gives the developer access to padLeft and padRight functions
// both functions take a string which is to be padded, the length the string must be padded to
// and optionally the string of chars/single char to pad the string with, and returns the padded string.
// if no string of chars/single char is passed in to pad with, it defaults to a space char: ' ' 
//
// Copyright 2015 Glen Keane - MIT Licence.
// 

exports.padLeft = function(str, padLength, padStr){
	var origStr = str || '';
	var pL = padLength || 0;
	var pS = padStr || ' ';

	var moddedStr = new String(origStr);

	if (origStr.length < pL){            
    	for (var i = 0; i < (pL - origStr.length); i++){
    		moddedStr = pS + moddedStr;
    	}
	}

	return moddedStr;
}

exports.padRight = function(str, padLength, padStr){
	var origStr = str || '';
	var pL = padLength || 0;
	var pS = padStr || ' ';

	var moddedStr = new String(origStr);

	if (origStr.length < pL){            
    	for (var i = 0; i < (pL - origStr.length); i++){
    		moddedStr = moddedStr + pS;
    	}
	}

	return moddedStr;
}