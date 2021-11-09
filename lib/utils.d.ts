export declare const splitVinCode: (vin: String) => {
    country: string;
    manufacturer: string;
    details: string;
    securityCode: string;
    year: string;
    assemblyPlant: string;
    serialNumber: string;
};
export declare const getYear: (code: string) => number[];
export declare const getCountry: (countryCode: String) => string;
export declare const getManufacturer: (manufacturerCode: String) => string;
export declare const getLogo: (manufacturer: String) => string;
export declare const getLogoFromCode: (manufacturerCode: String) => string;
//# sourceMappingURL=utils.d.ts.map