# string-padder - Another string padding module.
---------------

*A (tiny!) utility module for string padding methods.*

I created this after seeing the code here: http://www.lm-tech.it/Blog/post/2012/12/01/String-Padding-in-Javascript.aspx

I didn't want to mess with the String prototype however... so here we are!

This is a module which (Currently) exports 3 functions, `padLeft`, `padRight` and `padBoth`. All functions take the string which is to be padded, the length the string must be padded to and optionally the string of chars or a single char to pad the string with, and returns the padded string. If no string of chars/single char is passed into the function to pad with, it defaults to a space char: ' '.

If a string is entered to be used as the pad, that string is repeated until the return string length is the pad length passed into the function, cutting the pad string off mid string. This can cause unexpected behaviour if using padBoth. Please refer to the padBoth example to see the behaviour expected. The left side pad is given precedence, but only by a single character, meaning the function will try to pad each side equally.

## Installing

```npm install string-padder```


## padLeft Example
```javascript
	var padLeft = require('string-padder').padLeft;

	// basic example of a single char used as padding
	var stringToBePadded = "hey I'm only 27 chars long!";
	var leftPaddedString = padLeft(stringToBePadded, 35, '_');
	leftPaddedString  === '________hey I'm only 27 chars long!'

	// example of repeating string padding
	var str = '123';
	var tenLong = padLeft(str, 10, '12345');
	tenLong === '1231234512';
```

## padRight Example
```javascript
	var padRight = require('string-padder').padRight;

	// basic example of a single char used as padding
	var stringToBePadded = "hey I'm only 27 chars long!";
	var rightPaddedString = padRight(stringToBePadded, 35, '_');
	rightPaddedString  === 'hey I'm only 27 chars long!________'

	// example of repeating string padding
	var str = '123';
	var tenLong = padRight(str, 10, '12345');
	tenLong === '1234512123';
```

## padBoth Example
```javascript
	var padBoth = require('string-padder').padBoth;

	// basic example of a single char used as padding
	var stringToBePadded = "hey I'm only 27 chars long!";
	var bothPaddedString = padBoth(stringToBePadded, 35, '_');
	bothPaddedString  === '____hey I'm only 27 chars long!____'

	var leftSidePrecedence = padBoth(stringToBePadded, 36, '_');
	leftSidePrecedence  === '_____hey I'm only 27 chars long!____'

	// example of repeating string padding
	var str = '123';
	var tenLong = padBoth(str, 10, '12345');
	tenLong === '1234123123';

	var twentyLong = padBoth(str, 20, '12345');
	twentyLong === '12345123412312345123';
```

## Happy Padding!

Copyright 2015 - Glen Keane - MIT Licence