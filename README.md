 # Welcome to Car Vin Decoder
 
 Car vin decoder is a lightweight, fully-featured NPM package that can be used anywhere. 
 
 ## Installation
 
 Car Vin Decoder is avalable as npm package

```JavaScript 
  npm install car-vin-decoder
```

## Usage

#### Standard VIN (Vehicle Identification Number) decode 

```JavaScript 
   
   import { vinDecoder } from 'car-vin-decoder';
   
   const result = vinDecoder("WAUZZZ8E05A410409").decode();
   
   //Return al information extracted from VIN: Manufacturer, Country of Origin, Year, Logo Image, etc;
   /*  
      {
        manufacturer: 'Audi',
        country: 'Germany',
        year: 2005,
        posibleYear: [ 2005 ],
        logoImage: 'https://www.car-logos.org/wp-content/uploads/2011/09/audi.png'
      }
   
   */

```

#### Complete VIN (Vehicle Identification Number) decode 
```JavaScript
   import { vinDecoder } from 'car-vin-decoder';
   
   const result = vinDecoder("WAUZZZ8E05A410409").decode_all_info();
   
   // Return all Standard information  + Serial Number, Assembly Plant, Security Code, etc;
  /*
   
    {
      manufacturer: 'Audi',
      country: 'Germany',
      year: 2005,
      posibleYear: [ 2005 ],
      serialNumber: '410409',
      securityCode: '0',
      assemblyPlant: 'A',
      details: 'ZZZ8E',
      logoImage: 'https://www.car-logos.org/wp-content/uploads/2011/09/audi.png'
    }
   
  */
  
  
```

### Get any vehicle Logo from manufacturer name or VIN

```JavaScript 
    import { getVehicleLogo } from 'car-vin-decoder';
    
    const image_url = getVehicleLogo("Skoda"); // Return image url to Skoda Logo
    console.log(image_url)
```

### Separate Information
 
 ```JavaScript
   import { vinDecoder } from 'car-vin-decoder';
   
   const result = vinDecoder("WAUZZZ8E05A410409");
  
 ```
 
 **1) Extract Manufacturer**
 ```JavaScript
    const manufacturer = result.manufacturer()
 ```
  **2) Extract Country**
 ```JavaScript
    const country = result.country()
 ```
   **3) Extract Year**
 ```JavaScript
    const year = result.year()
 ```
   **4) Extract Logo Image**
 ```JavaScript
    const image = result.logoImage()
 ```
   **5) Extract Serial Number**
 ```JavaScript
    const serial_number = result.serialNumber()
 ```
   **6) Extract Security Code**
 ```JavaScript
    const security_code = result.securityCode()
 ```
   **7) Extract Other Details**
 ```JavaScript
    const details = result.details()
 ```
   **7) Extract Assembly Plant**
 ```JavaScript
    const assembly_plant = result.assemblyPlant()
 ```


 
