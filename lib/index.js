"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleLogo = exports.vinDecoder = void 0;
var validators_1 = require("./validators");
var utils_1 = require("./utils");
var utils_2 = require("./utils");
var utils_3 = require("./utils");
function vinDecoder(vin) {
    var valid = (0, validators_1.validateVin)(vin);
    var splited = (0, utils_1.splitVinCode)(vin);
    if (!valid)
        return false;
    var vinInstance = {
        validate: valid,
        manufacturer: (0, utils_2.getManufacturer)(splited.manufacturer),
        serialNumber: splited.serialNumber,
        country: (0, utils_1.getCountry)(splited.country),
        securityCode: splited.securityCode,
        assemblyPlant: splited.assemblyPlant,
        logoImage: (0, utils_3.getLogoFromCode)(splited.manufacturer),
        year: (0, utils_3.getYear)(splited.year)[0] || null,
        posibleYear: (0, utils_3.getYear)(splited.year),
        details: splited.details,
        decode: {
            manufacturer: (0, utils_2.getManufacturer)(splited.manufacturer),
            country: (0, utils_1.getCountry)(splited.country),
            year: (0, utils_3.getYear)(splited.year)[0],
            posibleYear: (0, utils_3.getYear)(splited.year),
            logoImage: (0, utils_3.getLogoFromCode)(splited.manufacturer)
        },
        decode_all_info: {
            manufacturer: (0, utils_2.getManufacturer)(splited.manufacturer),
            country: (0, utils_1.getCountry)(splited.country),
            year: (0, utils_3.getYear)(splited.year)[0],
            posibleYear: (0, utils_3.getYear)(splited.year),
            serialNumber: splited.serialNumber,
            securityCode: splited.securityCode,
            assemblyPlant: splited.assemblyPlant,
            details: splited.details,
            logoImage: (0, utils_3.getLogoFromCode)(splited.manufacturer)
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