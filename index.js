const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers){
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
    return function () {
        return integer * integer;
    }   
}

function fareDoubler(integer){
    return integer * 2;
}

function fareTripler(integer){
    return integer * 3;
}

function selectDifferentDrivers(drivers, whichFunction){
    return whichFunction(drivers);
}

