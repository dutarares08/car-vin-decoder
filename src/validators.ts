
export const validateVin = (vin:String)=>{

    if(undefined !== vin && vin.length === 17)
        return true;
    else
        return false;

}