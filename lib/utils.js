"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLogoFromCode = exports.getLogo = exports.getManufacturer = exports.getCountry = exports.getYear = exports.splitVinCode = void 0;
var countries_1 = require("./data/countries");
var manufacturers_1 = require("./data/manufacturers");
var logoImages_1 = require("./data/logoImages");
var vinIndexList = {
    MADE_IN_START: 0,
    MADE_IN_END: 2,
    MANUFACTURER_START: 0,
    MANUFACTURER_END: 3,
    DETAILS_START: 3,
    DETAILS_END: 8,
    SECURITY_CODE: 8,
    YEAR: 9,
    ASSEMBLY_PLANT: 10,
    SERIAL_NUMBER_START: 11
};
var yearCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var splitVinCode = function (vin) {
    var result = {
        country: vin.substring(vinIndexList.MADE_IN_START, vinIndexList.MADE_IN_END),
        manufacturer: vin.substring(vinIndexList.MANUFACTURER_START, vinIndexList.MANUFACTURER_END),
        details: vin.substring(vinIndexList.DETAILS_START, vinIndexList.DETAILS_END),
        securityCode: vin.charAt(vinIndexList.SECURITY_CODE),
        year: vin.charAt(vinIndexList.YEAR),
        assemblyPlant: vin.charAt(vinIndexList.ASSEMBLY_PLANT),
        serialNumber: vin.substring(vinIndexList.SERIAL_NUMBER_START)
    };
    return result;
};
exports.splitVinCode = splitVinCode;
var getYear = function (code) {
    var now = new Date();
    var currentYear = now.getFullYear();
    var yearOffset = yearCodes.indexOf(code);
    if (yearOffset === -1) {
        return [];
    }
    var possibleYears = [2010 + yearOffset, 1980 + yearOffset];
    if (possibleYears[1] > currentYear) {
        return [possibleYears[1]];
    }
    if (possibleYears[0] > currentYear) {
        return [possibleYears[1]];
    }
    return possibleYears;
};
exports.getYear = getYear;
var getCountry = function (countryCode) {
    var name = "";
    countries_1.countries.map(function (country) {
        if (country.code === countryCode) {
            return name = country.name;
        }
    });
    return name;
};
exports.getCountry = getCountry;
var getManufacturer = function (manufacturerCode) {
    var brand = "";
    manufacturers_1.manufacturers.map(function (manufacturer) {
        if (manufacturer.code === manufacturerCode)
            return brand = manufacturer.name;
    });
    return brand;
};
exports.getManufacturer = getManufacturer;
var getLogo = function (manufacturer) {
    var image = "";
    logoImages_1.logoImages.map(function (item) {
        if (item.name == manufacturer)
            return image = item.logo;
    });
    return image;
};
exports.getLogo = getLogo;
var getLogoFromCode = function (manufacturerCode) {
    var manufacturer = (0, exports.getManufacturer)(manufacturerCode);
    var image = "";
    logoImages_1.logoImages.map(function (item) {
        if (item.name == manufacturer)
            return image = item.logo;
    });
    return image;
};
exports.getLogoFromCode = getLogoFromCode;
//# sourceMappingURL=utils.js.map