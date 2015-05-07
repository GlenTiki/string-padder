//
// string-padder
// Utility library which gives the developer access to padLeft, padRight and padBoth functions
// all functions take a string which is to be padded, the length the string must be padded to
// and optionally the string of chars/single char to pad the string with, and returns the padded string.
// if no string of chars/single char is passed in to pad with, it defaults to a space char: ' ';
//
// Copyright 2015 Glen Keane - MIT Licence.
// 

function createPadString(padLength, padString){
	var str = ''

	while(str.length < padLength){
		var i = 0;
		while(i < padString.length && str.length < padLength){
			str = str + padString.charAt(i);

			i++;
		}
	}

	return str
}

function padLeft(str, padLength, padStr){
	var moddedStr = str || '';
	var pL = padLength || 0;
	var pS = padStr || ' ';

	// convert the input to a string if it is not a string
	if(!(moddedStr typeof String)){
		moddedStr = moddedStr.toString();
	}

	// try make padLength a number... 
	// return the input string if it cannot be converted to a number
	if(!(pL typeof Number)){
		try {
			pL = new Number(pL);
		} catch (err) {
			return str;
		}
	}

	// convert to pad string if it is not a string
	if(!(pS typeof String)){
		pS = pS.toString();
	}

	var padStrLength = pL - moddedStr.length;

	if(padLength > 0){
		moddedStr = createPadString(padStrLength, pS) + moddedStr;
	}

	return moddedStr;
}

function padRight(str, padLength, padStr){
	var moddedStr = str || '';
	var pL = padLength || 0;
	var pS = padStr || ' ';

	// convert the input to a string if it is not a string
	if(!(moddedStr typeof String)){
		moddedStr = moddedStr.toString();
	}

	// try make padLength a number... 
	// return the input string if it cannot be converted to a number
	if(!(pL typeof Number)){
		try {
			pL = new Number(pL);
		} catch (err) {
			return str;
		}
	}

	// convert to pad string if it is not a string
	if(!(pS typeof String)){
		pS = pS.toString();
	}

	var padStrLength = pL - moddedStr.length;

	if(padStrLength > 0){
		moddedStr = moddedStr + createPadString(padStrLength, pS);
	}

	return moddedStr;
}

function padBoth(str, padLength, padStr){
	var moddedStr = str || '';
	var pL = padLength || 0;
	var pS = padStr || ' ';

	// convert the input to a string if it is not a string
	if(!(moddedStr typeof String)){
		moddedStr = moddedStr.toString();
	}

	// try make padLength a number... 
	// return the input string if it cannot be converted to a number
	if(!(pL typeof Number)){
		try {
			pL = new Number(pL);
		} catch (err) {
			return str;
		}
	}

	// convert to pad string if it is not a string
	if(!(pS typeof String)){
		pS = pS.toString();
	}

	var padStrLength = pL - moddedStr.length;

	if(padStrLength > 0){
		var padLeftAmount = Math.ceil(padStrLength/2);
		var padRightAmount = Math.floor(padStrLength/2);

		moddedStr = createPadString(padLeftAmount, pS) + moddedStr + createPadString(padRightAmount, pS);
	}

	return moddedStr;
}

module.exports = {
	padLeft: padLeft,
	padRight: padRight,
	padBoth: padBoth
}