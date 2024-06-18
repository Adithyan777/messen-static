const convert = require('convert-units');

const extraUnits = ['lb/h','kg/h','MPa abs','kPa abs','psi abs','bar abs']

const atmPressure = {
    'bar' : 1.10325,
    'kPa': 101.325,
    'MPa': 0.10133,
    'psi': 14.6954
}   

function toAbs(value, unit) {
    return value + atmPressure[unit];
}
  
function toGauge(value, unit) {
    return value - atmPressure[unit];
}

function convertFromAbs(value,fromUnit,toUnit){ // use it for conversion from an abs value to another gauge value
    const from = fromUnit.split(' ')[0];
    return convert(toGauge(value,from)).from(from).to(toUnit);
}

function convertToAbs(value,fromUnit,toUnit){ // use it for conversion from a gauge value to another abs value
    const to = toUnit.split(' ')[0];
    return toAbs(convert(value).from(fromUnit).to(to),to);
}

function convertAbsToAbs(value,fromUnit,toUnit){ // use it for conversion between abs value to another abs
    const to = toUnit.split(' ')[0];
    const from = fromUnit.split(' ')[0];
    return toAbs(convert(toGauge(value,from)).from(from).to(to),to);
}

function convertFromLbHr(value,unit){ // use it for conversion from lb/h to any other unit except kg/h
    const gpmValue = value * 0.0027;
    return convert(gpmValue).from('gal/min').to(unit);
}

function convertToLbHr(value,unit){ // use it for conversion to lb/h from any other unit except kg/h
    const gpmValue = convert(value).from(unit).to('gal/min');
    return gpmValue / 0.0027;  
}

function convertToKgHr(value,unit){ // use it for conversion to kg/h from any other unit except lb/h
    const gpmValue = convert(value).from(unit).to('gal/min');
    return gpmValue * 201.66;
}

function convertFromKgHr(value,unit){ // use it for conversion from kg/h to any other unit except lb/h
    const gpmValue = value * 0.0050;
    return convert(gpmValue).from('gal/min').to(unit);
}

function convertTo(value,toUnit){ // use it for conversion between lb/h and kg/h
    if (toUnit === 'lb/h')
        return value * 2.20462;
    else (toUnit === 'kg/h')
        return value / 2.20462;
}

function generalConvert(value, fromUnit, toUnit) { // general conversion logic using the conversion library
    return convert(value).from(fromUnit).to(toUnit);
}

function UnitConversionFunction(value, fromUnit, toUnit) {
    const isAbsUnit = unit => unit.endsWith(' abs');
    const isLbHr = unit => unit === 'lb/h';
    const isKgHr = unit => unit === 'kg/h';

    if (extraUnits.includes(fromUnit) || extraUnits.includes(toUnit)) {
        if(fromUnit === toUnit){
            return value;
        }
        else if (isAbsUnit(fromUnit) && isAbsUnit(toUnit)) {
            return convertAbsToAbs(value, fromUnit, toUnit);
        } else if (isAbsUnit(fromUnit)) {
            return convertFromAbs(value, fromUnit, toUnit);
        } else if (isAbsUnit(toUnit)) {
            return convertToAbs(value, fromUnit, toUnit);
        } else if (isLbHr(fromUnit)) {
            if (toUnit === 'kg/h') {
                return convertTo(value, toUnit); // Use convertTo function for lb/h to kg/h
            } else {
                return convertFromLbHr(value, toUnit);
            }
        } else if (isLbHr(toUnit)) {
            if (fromUnit === 'kg/h') {
                return convertTo(value, toUnit); // Use convertTo function for kg/h to lb/h
            } else {
                return convertToLbHr(value, fromUnit);
            }
        } else if (isKgHr(fromUnit)) {
            return convertFromKgHr(value, toUnit);
        } else if (isKgHr(toUnit)) {
            return convertToKgHr(value, fromUnit);
        }
    } else {
        return generalConvert(value, fromUnit, toUnit);
    }
}

module.exports = {
    UnitConversionFunction
};