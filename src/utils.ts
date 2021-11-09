import { countries } from "./data/countries";
import { manufacturers } from "./data/manufacturers";
import { logoImages } from "./data/logoImages";

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


export const splitVinCode = (vin:String)=>{
    
    const result = 
    {
        country: vin.substring(vinIndexList.MADE_IN_START, vinIndexList.MADE_IN_END),
        manufacturer: vin.substring(vinIndexList.MANUFACTURER_START, vinIndexList.MANUFACTURER_END),
        details: vin.substring(vinIndexList.DETAILS_START, vinIndexList.DETAILS_END),
        securityCode: vin.charAt(vinIndexList.SECURITY_CODE),
        year: vin.charAt(vinIndexList.YEAR),
        assemblyPlant: vin.charAt(vinIndexList.ASSEMBLY_PLANT),
        serialNumber: vin.substring(vinIndexList.SERIAL_NUMBER_START)
    }

    return result;
}




export const getYear = (code:string)=>{
    let now = new Date();
    let currentYear = now.getFullYear();

    var yearOffset = yearCodes.indexOf(code);

    if (yearOffset === -1) {
        return [];
    }

    let possibleYears = [2010 + yearOffset, 1980 + yearOffset];

    if (possibleYears[1] > currentYear) {
        return [possibleYears[1]];
    }
    if (possibleYears[0] > currentYear) {
        return [possibleYears[1]];
    }

    return possibleYears;
}


export const getCountry = (countryCode:String)=>{

   let name ="";
    countries.map(country=>{
        
        if(country.code === countryCode)
        {
            return name=country.name ;           
        }
    })
    return name;

}

export const getManufacturer = (manufacturerCode:String)=>{
    let brand = ""

    manufacturers.map(manufacturer=>{
        if(manufacturer.code === manufacturerCode)
            return brand =  manufacturer.name;
    })
    return brand;
}

export const getLogo = (manufacturer:String)=>{
    let image="";
    
    logoImages.map(item=>{
        if(item.name==manufacturer)
            return image = item.logo;
    })
    return image;
}


export const getLogoFromCode = (manufacturerCode:String)=>{
    const manufacturer = getManufacturer(manufacturerCode);

    let image="";

    logoImages.map(item=>{
        if(item.name==manufacturer)
            return image = item.logo;
    })

    return image;
}