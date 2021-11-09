import { validateVin } from "./validators"
import { getCountry, splitVinCode } from "./utils";
import {getManufacturer} from "./utils";
import { getLogo, getYear, getLogoFromCode } from "./utils";


export function testFunction(a:string){
    console.log("test function");
    console.log(a);
}


export function vinDecoder(vin:String){
    const valid = (validateVin(vin));
    const splited = splitVinCode(vin);

    if(!valid)
        return false;

    var vinInstance ={
        validate:function validate(){
            return valid;
        },

        manufacturer: function manufacturer(){
            return getManufacturer(splited.manufacturer)  
        },

        serialNumber:function serialnumber(){
            return splited.serialNumber
            
        },
        country:function country(){
            return getCountry(splited.country)
        },
        securityCode:function securityCode(){
            return splited.securityCode
        },
        assemblyPlant:function assemblyPlant()
        {
            return splited.assemblyPlant
        },
        logoImage:function logoImage(){
            return getLogoFromCode(splited.manufacturer)
        },
        year:function year(){
            return getYear(splited.year)[0] || null
        },
        posibleYear:function posibleYear(){
            return getYear(splited.year)
        },
        details:function details(){
            return splited.details
        },

        decode:function decode(){
            return {
                manufacturer:getManufacturer(splited.manufacturer),
                country:getCountry(splited.country),
                year:getYear(splited.year)[0],
                posibleYear:getYear(splited.year),
                logoImage:getLogoFromCode(splited.manufacturer)
            }
        },
        decode_all_info:function decode_all(){
            return{
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

    }
    return vinInstance;
}


export function getVehicleLogo(brand:String){
    const logo = getLogo(brand);

    if(logo === undefined || logo.length < 1 )
        return false;
    return logo;
}