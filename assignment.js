// https://github.com/Abrar903/assignment-3


     // kilometerToMeter converter

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
     return meter;
}


        //budgetCalculator part

function budgetCalculator(watch,mobile,laptop) {
    var watch = watch * 50;
    var mobile = mobile * 3;
    var laptop = laptop * 2;
    var total = watch + mobile + laptop;
    return total;
}
var result = budgetCalculator(6,3,2);


     //megaFriend part


function megaFriend(friendsList) {
    var friendsList = ["ami", "amma", "abba", "vhai", "bon", "shahriar", "abdullah", "ayman"];
    var max = friendsList[0];
    var maximum = friendsList[1].length;
    
    for(var i = 0; i<friendsList.length; i++) {
        if(element > max) {
            max = element;
            return max;
        }
    }
}