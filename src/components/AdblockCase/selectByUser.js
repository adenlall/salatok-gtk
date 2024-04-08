import { useEffect, useState } from 'react';
import Axios from 'axios';
import $ from 'jquery';

function SelectByUser() {

	const [dataUI, setDataUI] = useState("");
	
	const parse = (res) => {
          let arr=[];
		      if (res) {
		      for (let i = 0; i<res.length; i++ ) {
		           let region = getOr(res[i].address, ["region","state","province","place"]);
		           let city = getOr(res[i].address, ["city","town","village"]);
		           let country = res[i].address.country;
		           if (!res[i].lat || !res[i].lon || !city || !region || !country) {
		                if (res[i].importance >= 0.5) {
		                let city = getValid(res[i].address,"city");
		                let region = getValid(res[i].address,"region");
		                arr.push({"name": res[i].display_name,"city":city,"region":region,"country":getValid(res[i].address, "country"), "lat":res[i].lat, "long":res[i].lon});
		               }
		              continue;
		           }
		           arr.push({"name": res[i].display_name,"city":city,"region":region,"country":country, "lat":res[i].lat, "long":res[i].lon});
		      }
          }
          return arr;
     }
    
    const createUIsearch = (data) => {
    		data = parse(data);
    		let UIarr = [];
    		for (let i=0; i<data.length; i++ ) {
				let UI = (
				<details class="collapse  my-5 border-base-300 bg-slate-300 dark:bg-gray-700 dark:text-slate-100 text-gray-800">
				  <summary class="collapse-title text-xl font-medium">{data[i].city} - {data[i].country}</summary>
				  <div class="collapse-content"> 
					<p>lat : {data[i].lat}, long : {data[i].long}</p> 
					<button className="btn btn-sm" onClick={()=>{setLocation(data[i])}}>save</button>
				  </div>
				</details>
				);
				UIarr.push(UI);
    		}
    		setDataUI(UIarr);
    }
    
    const setLocation = (data) => {
		
		document.querySelector('.stt').innerHTML = `We get it! ${data.country +'-'+data.city}`;
		localStorage.clear();
		
		localStorage.setItem('country' , data.country  );
		localStorage.setItem('city'    , data.city     );
		localStorage.setItem('timezone', data.timezone );
		localStorage.setItem("lat"     , data.lat      );
		localStorage.setItem("long"    , data.long     );
		
		document.querySelector('.bttnn').innerHTML = "Redy!";
		document.querySelector('.stt').innerHTML = "All done! Enjoy the app.";
		window.location.replace("/");
	}
    
		const getValid = (data, key) => {
		if(key=="city"){
			if (!getOr(data, ["city","town","village"])) {
				let cc = getOr(data, ["region","state","province", "place"]);
				if (cc) {
				  return cc;
				}
				console.error('undifined Not city Not region at Nomination@#getValid');
				console.error({data_related: data});
				return "[undefined]";
		  }
		  return getOr(data, ["city","town","village"]);
		}
		if(key=="region"){
			if (!getOr(data, ["region","state","province", "place"])) {
				let rr = getOr(data, ["city","town","village"]);
				if (rr) {
				  return rr
				}
				console.error('undifined Not city Not region at Nomination@#getValid');
				console.error({data_related: data});
				return "[undefined]";
		  }
		  return getOr(data, ["region","state","province", "place"]);
		}
		if(key==="country"){
		  if (!getOr(data, ["country","country_code"])) {
			console.error('error no country found in : ', data);
			return "[undefined]";
		  }
		  return getOr(data, ["country","country_code"]);
		}
		}

	const getOr = (res, arr) => {
		for (let i = 0; i < arr.length; i++) {
			if (res[arr[i]]) {
				return res[arr[i]];
			}
		}
	}


	const hundelSearch = (e) => {
	  e.preventDefault();
	  if (e.target.value && e.target.value.length !== 0) {
	  	 Axios.get(`https://nominatim.openstreetmap.org/search?q=${e.target.value}&addressdetails=1&limit=3&format=json`)
            .then(data => {
                console.log("NOMINATION API : ",data);
                createUIsearch(data.data);
            }).catch(erro => {
                console.log(erro);
            })
	  }
	};


    const locate = () => {
        document.querySelector('.stt').innerHTML = "...";
        Axios.get('https://api.ipify.org?format=json').then(res => {
            Axios.post(`https://iptwist.com`, { ip: `${res.data.ip}` }, {
              headers: {
                'Content-Type': 'application/json',
                'X-IPTWIST-TOKEN': 'Xpy1YphN5bu10XqVYDASedcCt2AJJnDTTIRQcaTLgOstdTIcg5HEAwPYU9fzjKjN'
              },
            }).then(res => {
					document.querySelector('.stt').innerHTML = `We get it! Now we check if we support your location: ${res.data.country +'-'+res.data.city}`
					document.querySelector('.stt').innerHTML = `We're really sorry, but we dont support your location yet. Try to chose a big city in your county manually.
					your location : ${res.data.country} - ${res.data.city}`;
					localStorage.clear();
					
					localStorage.setItem('country' , res.data.country  );
					localStorage.setItem('city'    , res.data.city     );
					localStorage.setItem("timezone", res.data.timezone );
					localStorage.setItem("lat"     , res.data.latitude );
					localStorage.setItem("long"    , res.data.longitude);
					
					document.querySelector('.bttnn').innerHTML = "Redy!";
					document.querySelector('.stt').innerHTML = "All done! Enjoy the app.";
					window.location.replace("/");
            }).catch(erro => {document.querySelector('.stt').innerHTML = "Please Sur! Your Adblocker/Browser block us to locate your location."});
          }).catch(error => {document.querySelector('.stt').innerHTML = "Please Sur! Your Adblocker/Browser block us to locate your location."});
    }

    return (
		<>
			<div className="lg:w-[40%] lg:h-[37em] max-h-full lg:max-h-[37em] h-full w-full md:h-auto shadow-xl flex flex-col justify-between items-stretch p-4 rounded-lg bg-slate-100 dark:bg-gray-800 dark:text-slate-100 text-gray-800">
				<div className="flex flex-col h-full w-full justify-evenly items-center">
					<div className="flex flex-row items-end w-[87%] py-6 space-x-2">
						<header className="text-2xl lg:text-4xl font-bold">Find your Location.</header>
						<div className="tooltip tooltip-left" data-tip="we recommend you select your actual location, to get real times because the location and your local time should be synchronize.">
							<button className="btn btn-square btn-sm">
								<svg viewBox="0 0 24 24" className="dark:text-white fill-[#90bec8]" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 15H12.01M12 12V9M4.98207 19H19.0179C20.5615 19 21.5233 17.3256 20.7455 15.9923L13.7276 3.96153C12.9558 2.63852 11.0442 2.63852 10.2724 3.96153L3.25452 15.9923C2.47675 17.3256 3.43849 19 4.98207 19Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
						</div>
					</div>
					<input onChange={hundelSearch} type="text" placeholder="Search with Nomination API" className="input input-bordered text-black input-primary w-[87%] max-w-[87] my-6" />
					<div className="max-h-[16em] my-10 w-full h-full overflow-scroll">
						<div className="join join-vertical w-full">
							{dataUI}
						</div>
					</div>
					<p className="stt font-bold text-lg"></p>
					<div className="btn-group">
						<button onClick={()=>{locate()}} className="btn bttnn">Detect My Location</button>
					</div>
				</div>
			</div>
		</>
    );
}

export default SelectByUser;
