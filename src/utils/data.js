
export class Data {


    /*   Default Data for ini     */
     config = {
          coordinates: [43, -80],
          city: "Sidi Bennour",
          country: "Morocco",
          timezone: 0,
          chack_timezone: false,
          dst: "auto",
          format: "24h",
          settings:{
            showborder: true,
          },
          enabled: [
		                ['imsak' , true],
		                ['fajr' , false],
		                ['sunrise' , true],
		                ['dhuhr' , false],
		                ['asr' , true],
		                ['sunset' , false],
		                ['maghrib' , true],
		                ['isha' , true],
		                ['midnight' , true],
	                ],
     }
     method = {
          method:"MWL",
          midnight: "Standard",
          highlat:"None",
     }
     adjusting = {
          imsak   : [18      ,false],
          fajr    : [-11     ,true ],
          dhuhr   : [2       ,false],
          asr     : ["Hanafi",false],
          maghrib : [4       ,true ],
          isha    : [18      ,false],
     }
     offsets = {
          sunrise: -1,
          sunset :  3.5,
     }



  /*   Data to call for Settings     */
  
  DataData = {
  
     config : {
        format: [
	                '24h',         // 24-hour format
	                '12h',         // 12-hour format
	                '12hNS',       // 12-hour format with no suffix
                ],
      },
   method : {
    method:[
      "MWL",
      "ISNA",
      "Egypt",
      "Makkah",
      "Karachi",
      "Tehran",
      "Jafari"
    ],
	  midnight : [
		  'Standard',    // Mid Sunset to Sunrise
		  'Jafari'       // Mid Sunset to Fajr
	  ],
	  highlat : [
		  'NightMiddle', // middle of night
		  'AngleBased',  // angle/60th of night
		  'OneSeventh',  // 1/7th of night
		  'None'         // No adjustment
	  ],
   },
   adjusting : {
      asr : [
		  'Standard',    // Shafi`i, Maliki, Ja`fari, Hanbali
		  'Hanafi',       // Hanafi
	  ],
   }
}

}
