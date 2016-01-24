exports.count = function(first, second) {
    first = first.toUpperCase();
    second = second.toUpperCase();
    firstlength = first.length;
    secondlength = second.length;
    var LoveCount = 0;

    for (Count = 0; Count < firstlength; Count++) {
        letter1 = first.substring(Count, Count + 1);
        if (letter1 == 'L') LoveCount += 2;
        if (letter1 == 'O') LoveCount += 2;
        if (letter1 == 'V') LoveCount += 2;
        if (letter1 == 'E') LoveCount += 2;
        if (letter1 == 'Y') LoveCount += 3;
        if (letter1 == 'O') LoveCount += 1;
        if (letter1 == 'U') LoveCount += 3;
    }

    for (Count = 0; Count < secondlength; Count++) {
        letter2 = second.substring(Count, Count + 1);
        if (letter2 == 'L') LoveCount += 2;
        if (letter2 == 'O') LoveCount += 2;
        if (letter2 == 'V') LoveCount += 2;
        if (letter2 == 'E') LoveCount += 2;
        if (letter2 == 'Y') LoveCount += 3;
        if (letter2 == 'O') LoveCount += 1;
        if (letter2 == 'U') LoveCount += 3;
    }

    amount = 0; 
    if (LoveCount > 0) amount = 5 - ((firstlength + secondlength) / 2);
    if (LoveCount > 2) amount = 10 - ((firstlength + secondlength) / 2);
    if (LoveCount > 4) amount = 20 - ((firstlength + secondlength) / 2);
    if (LoveCount > 6) amount = 30 - ((firstlength + secondlength) / 2);
    if (LoveCount > 8) amount = 40 - ((firstlength + secondlength) / 2);
    if (LoveCount > 10) amount = 50 - ((firstlength + secondlength) / 2);
    if (LoveCount > 12) amount = 60 - ((firstlength + secondlength) / 2);
    if (LoveCount > 14) amount = 70 - ((firstlength + secondlength) / 2);
    if (LoveCount > 16) amount = 80 - ((firstlength + secondlength) / 2);
    if (LoveCount > 18) amount = 90 - ((firstlength + secondlength) / 2);
    if (LoveCount > 20) amount = 100 - ((firstlength + secondlength) / 2);
    if (LoveCount > 22) amount = 110 - ((firstlength + secondlength) / 2);

    if (firstlength === 0 || secondlength === 0) amount = 'Err';
    if (amount < 0) amount = 0;
    if (amount > 99) amount = 99;

    return amount;
};
