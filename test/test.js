var padder = require("../padder");

exports.padLeftTest = function(test){
	var stringToBePadded = "hey I'm only 27 chars long!";
	test.equal(27, stringToBePadded.length);

	var unpaddedString = padder.padLeft(stringToBePadded, 3, '_');
	test.equal(27, unpaddedString.length);

	var leftPaddedString = padder.padLeft(stringToBePadded, 35, '_');
	test.equal(35, leftPaddedString.length);
	test.equal(leftPaddedString, "________hey I'm only 27 chars long!")

	var str = "123";
	test.equal(3, str.length);

	var tenLong = padder.padLeft(str, 10, "abcde");
	test.equal(10, tenLong.length);
	test.equal(tenLong, "abcdeab123");

	test.done();
};

exports.padRightTest = function(test){
	var stringToBePadded = "hey I'm only 27 chars long!";
	test.equal(27, stringToBePadded.length);

	var unpaddedString = padder.padRight(stringToBePadded, 3, '_');
	test.equal(27, unpaddedString.length);

	var rightPaddedString = padder.padRight(stringToBePadded, 35, '_');
	test.equal(35, rightPaddedString.length);
	test.equal(rightPaddedString, "hey I'm only 27 chars long!________")

	var str = "123";
	test.equal(3, str.length);

	var tenLong = padder.padRight(str, 10, "abcde");
	test.equal(10, tenLong.length);
	test.equal(tenLong, "123abcdeab");

	test.done();
};

exports.padBothTest = function(test){
	var stringToBePadded = "hey I'm only 27 chars long!";
	test.equal(27, stringToBePadded.length);

	var unpaddedString = padder.padBoth(stringToBePadded, 3, '_');
	test.equal(27, unpaddedString.length);

	var bothPaddedString = padder.padBoth(stringToBePadded, 35, '_');
	test.equal(35, bothPaddedString.length);
	test.equal(bothPaddedString, "____hey I'm only 27 chars long!____");

	var leftSidePrecedence = padder.padBoth(stringToBePadded, 36, '_');
	test.equal(36, leftSidePrecedence.length);
	test.equal(leftSidePrecedence, "_____hey I'm only 27 chars long!____");

	var str = "123";
	test.equal(3, str.length);

	var tenLong = padder.padBoth(str, 10, "abcde");
	test.equal(10, tenLong.length);
	test.equal(tenLong, "abcd123abc");
	tenLong === "abcd123abc";

	var twentyLong = padBoth(str, 20, "abcde");
	test.equal(10, twentyLong.length);
	test.equal(twentyLong, "abcdeabcd123abcdeabc");

	test.done();
};