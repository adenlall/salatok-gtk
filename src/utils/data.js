export class Data {

     config = {
          coordinates: ["51.50853","-0.12574"],
          city: "London",
          country: "UK",
          timezone: 0,
          check_timezone: false,
          dst: "auto",
          format: "24h",
          settings:{
          	force:false,
          	appversion: "master",
          	reset: false,
            showborder: false,
            firsttime: true,
            fontsize:23,
            ayahbetween:"{%i}",
            fonttype:3,
            showchild:1,
            qlanguage_name:"ar.tanzil.txt"
          },
          enabled: [
		                ['imsak' , false],
		                ['fajr' , true],
		                ['sunrise' , true],
		                ['dhuhr' , true],
		                ['asr' , true],
		                ['sunset' , false],
		                ['maghrib' , true],
		                ['isha' , true],
		                ['midnight' , false],
	                ],
     }
     method = {
          method:"MWL",
          midnight: "Standard",
          highlat:"NightMiddle",
     }
     adjusting = {
          imsak   : [18      ,false],
          fajr    : [18      ,false],
          dhuhr   : [2       ,false],
          asr     : ["Hanafi",false],
          maghrib : [4       ,false],
          isha    : [18      ,false],
     }
     offsets = {
          sunrise: 0,
          sunset : 0,
     }



  /*   Data to call for Settings     */
  
  DataData = {
  
     config : {
        format: [
	                '24h',           // 24-hour format
	                //'12h',         // 12-hour format
	                //'12hNS',       // 12-hour format with no suffix
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
