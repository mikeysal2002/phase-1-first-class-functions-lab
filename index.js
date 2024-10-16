// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers_names){
    return drivers_names.slice(0,2);
    };

const returnLastTwoDrivers=function(drivers_names){
        return drivers_names.slice(-2);
    };

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
    
function createFareMultiplier(multiplier){
    return function (fare){
       return multiplier*fare;
    };
    }
    
const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);
    
function selectDifferentDrivers(drivers_names, drivers){
    return drivers(drivers_names);
    }