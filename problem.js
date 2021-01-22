// https://github.com/DevTeertha/Problem-Solving

function kilometerToMeter(kilometer) {
    var errorMessage = "Kilometer Should Not Be Negative Value.Please Try Again With Positive Value";
    if (kilometer < 0) {
        return errorMessage;
    }
    else {
        var meter = kilometer * 1000;
    }
    return meter;
}


function budgetCalculator(clock, phone, laptop) {
    var errorMessage = "Quantity Shound Not Be Negative or Float Value. Please Try Again With Positive Value";
    if (clock < 0 || phone < 0 || laptop < 0) {
        return errorMessage;
    }
    else if (clock % 1 !== 0 || phone % 1 !== 0 || laptop % 1 !== 0) {
        return errorMessage;
    }
    else {
        var totalClockPrice = 50 * clock;
        var totalPhonePrice = 100 * phone;
        var totalLaptopPrice = 500 * laptop;
        var total = totalClockPrice + totalPhonePrice + totalLaptopPrice;
    }
    return total;
}


function hotelCost(day) {
    var errorMessage = "Day Should Not Be Negative or Float Value.Please Try Again With Positive Value";
    if (day < 0 || day % 1 !== 0) {
        return errorMessage;
    }
    else if (day <= 10) {
        var cost = day * 100;
        return cost;
    }
    else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        var totalCost = first10 + secondPart;
        return totalCost;
    }
    else {
        var first10 = 10 * 100;
        var first20 = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalCost = first10 + first20 + thirdPart;
        return totalCost;
    }
}


function megaFriend(friends) {
    var errorMessage = "String Not Supported.Please Try Again With Array";
    var errorEmpty = "No name Found";
    if(friends.length<=0){
        return errorEmpty;
    }
    else if (Array.isArray(friends)) {
        var bigName = friends[0];
        for (i = 1; i < friends.length; i++) {
            if (bigName.length < friends[i].length) {
                bigName = friends[i];
            }
        }
    }
    else {
        return errorMessage;
    }
    return bigName;
}