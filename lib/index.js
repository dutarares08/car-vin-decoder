"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleLogo = exports.vinDecoder = exports.testFunction = void 0;
var validators_1 = require("./validators");
var utils_1 = require("./utils");
var utils_2 = require("./utils");
var utils_3 = require("./utils");
function testFunction(a) {
    console.log("test function");
    console.log(a);
}
exports.testFunction = testFunction;
function vinDecoder(vin) {
    var valid = ((0, validators_1.validateVin)(vin));
    var splited = (0, utils_1.splitVinCode)(vin);
    if (!valid)
        return false;
    var vinInstance = {
        validate: function validate() {
            return valid;
        },
        manufacturer: function manufacturer() {
            return (0, utils_2.getManufacturer)(splited.manufacturer);
        },
        serialNumber: function serialnumber() {
            return splited.serialNumber;
        },
        country: function country() {
            return (0, utils_1.getCountry)(splited.country);
        },
        securityCode: function securityCode() {
            return splited.securityCode;
        },
        assemblyPlant: function assemblyPlant() {
            return splited.assemblyPlant;
        },
        logoImage: function logoImage() {
            return (0, utils_3.getLogoFromCode)(splited.manufacturer);
        },
        year: function year() {
            return (0, utils_3.getYear)(splited.year)[0] || null;
        },
        posibleYear: function posibleYear() {
            return (0, utils_3.getYear)(splited.year);
        },
        details: function details() {
            return splited.details;
        },
        decode: function decode() {
            return {
                manufacturer: (0, utils_2.getManufacturer)(splited.manufacturer),
                country: (0, utils_1.getCountry)(splited.country),
                year: (0, utils_3.getYear)(splited.year)[0],
                posibleYear: (0, utils_3.getYear)(splited.year),
                logoImage: (0, utils_3.getLogoFromCode)(splited.manufacturer)
            };
        },
        decode_all_info: function decode_all() {
            return {
                manufacturer: (0, utils_2.getManufacturer)(splited.manufacturer),
                country: (0, utils_1.getCountry)(splited.country),
                year: (0, utils_3.getYear)(splited.year)[0],
                posibleYear: (0, utils_3.getYear)(splited.year),
                serialNumber: splited.serialNumber,
                securityCode: splited.securityCode,
                assemblyPlant: splited.assemblyPlant,
                details: splited.details,
                logoImage: (0, utils_3.getLogoFromCode)(splited.manufacturer)
            };
        }
    };
    return vinInstance;
}
exports.vinDecoder = vinDecoder;
function getVehicleLogo(brand) {
    var logo = (0, utils_3.getLogo)(brand);
    if (logo === undefined || logo.length < 1)
        return false;
    return logo;
}
exports.getVehicleLogo = getVehicleLogo;
//# sourceMappingURL=index.js.map