const scuberDrivers = ['Antonia','Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = scuberDrivers => scuberDrivers.slice(0,2);
const returnLastTwoDrivers = function(){
    return scuberDrivers.slice(2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
return function(fare){
    return multiplier * fare;
}
}

const fareDoubler = function(fare){
    return 2*fare;
}

const fareTripler = function(fare){
    return 3*fare;
}

function selectDifferentDrivers(scuberDrivers,returnFirstTwoDrivers){
     return returnFirstTwoDrivers (scuberDrivers);
}