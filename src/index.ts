import { validateVin } from "./validators"
import { getCountry, splitVinCode } from "./utils";
import {getManufacturer} from "./utils";
import { getLogo, getYear, getLogoFromCode } from "./utils";



export function vinDecoder(vin:String){
    const valid = validateVin(vin);
    const splited = splitVinCode(vin);

    if(!valid)
        return false;

    var vinInstance ={
        validate:valid,
        manufacturer: getManufacturer(splited.manufacturer),
        serialNumber: splited.serialNumber,
        country: getCountry(splited.country),
        securityCode: splited.securityCode,
        assemblyPlant: splited.assemblyPlant,
        logoImage: getLogoFromCode(splited.manufacturer),
        year: getYear(splited.year)[0] || null,
        posibleYear:getYear(splited.year),
        details: splited.details,

        decode:{
            manufacturer:getManufacturer(splited.manufacturer),
            country:getCountry(splited.country),
            year:getYear(splited.year)[0],
            posibleYear:getYear(splited.year),
            logoImage:getLogoFromCode(splited.manufacturer)
        },

        decode_all_info:{
            manufacturer:getManufacturer(splited.manufacturer),
            country:getCountry(splited.country),
            year:getYear(splited.year)[0],
            posibleYear:getYear(splited.year),
            serialNumber:splited.serialNumber,
            securityCode:splited.securityCode,
            assemblyPlant:splited.assemblyPlant,
            details:splited.details,
            logoImage:getLogoFromCode(splited.manufacturer)
        }

    }
    return vinInstance;
}


export function getVehicleLogo(brand:String){
    const logo = getLogo(brand);

    if(logo === undefined || logo.length < 1 )
        return false;
    return logo;
}