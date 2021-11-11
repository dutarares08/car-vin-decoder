export declare function vinDecoder(vin: String): false | {
    validate: boolean;
    manufacturer: string;
    serialNumber: string;
    country: string;
    securityCode: string;
    assemblyPlant: string;
    logoImage: string;
    year: number | null;
    posibleYear: number[];
    details: string;
    decode: {
        manufacturer: string;
        country: string;
        year: number;
        posibleYear: number[];
        logoImage: string;
    };
    decode_all_info: {
        manufacturer: string;
        country: string;
        year: number;
        posibleYear: number[];
        serialNumber: string;
        securityCode: string;
        assemblyPlant: string;
        details: string;
        logoImage: string;
    };
};
export declare function getVehicleLogo(brand: String): string | false;
//# sourceMappingURL=index.d.ts.map