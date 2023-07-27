

export class Helper {

    static getIndex(arr, val){
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]===val) {
          return i;
        }
      }
      console.error('error : (NOT FOUND '+val+' ) on '+ arr);
      return 0;
    }

    static getAdjusting(obj){
        let adj = {};
        obj.adjusting.imsak[1]    ? adj.imsak  = obj.adjusting.imsak[0] : '';
        obj.adjusting.fajr[1]     ? adj.fajr   = obj.adjusting.fajr[0] : '';
        obj.adjusting.dhuhr[1]    ? adj.dhuhr  = obj.adjusting.dhuhr[0]+" min" : '';
        obj.adjusting.asr[1]      ? adj.asr    = obj.adjusting.asr[0] : '';
        obj.adjusting.maghrib[1]  ? adj.maghrib= obj.adjusting.maghrib[0] : '';
        obj.adjusting.isha[1]     ? adj.isha   = obj.adjusting.isha[0] : '';
        
        adj.midnight = obj.midnight;
        adj.highLats = obj.highlat;
        
        return adj;
    }
    
    Parse(raw, enabled, f){
        let arr = [];
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let ff = f === "Float" ? "." : ":";
        if(f === "12h" || f === "12hNS"){
          h = h % 12 || 12;
        }
        let next = {};
        let status;
        let trace = {
              tt: 0,
              past:true, come:true, still:true,
              past_traced:false,come_traced:false,still_traced:false,
              enabled_trace:0, l:enabled.length, froce:false,
              next:true,plus:false,
            };
        let tt = {};
        for (let i = 0; i < enabled.length; i++) {
            if (enabled[i][1]) {
                trace.enabled_trace=i;
                trace.i = i;
                let H = parseInt(`${raw[enabled[i][0]]}`.split(ff)[0]);
                let M = parseInt(`${raw[enabled[i][0]]}`.split(ff)[1]);
                tt = this.#correctTime(H,h,M,m,trace);
                status = this.#getStatus(tt.hh,tt.mm, trace);
                if ((status === "come" || status === "still")&& trace.next) {
                  next.name = enabled[i][0];
                  next.time = raw[enabled[i][0]];
                  next.countdown = tt.hh+"h "+tt.mm+"min";
                  trace.next = false;
                }
                arr.push([enabled[i][0], raw[enabled[i][0]],  tt.hh+"h "+tt.mm+"min", status ? status : "past"]);
              }
        }
        if (trace.next) {
          next.name = "fajr";
          next.time = "next day";
          next.countdown = "next day";
        }
        return {data:arr, next:next};
    }
    
    #getStatus(hh, mm, trace){
      if (hh===0 && mm<0) {
        return "past";
      }
      if ((hh<=2&&hh>=0) && trace.come) {
        trace.past = false;
        trace.come_traced = true;
        return  "come";
      }
      if ((hh > 2) && trace.still) {
        trace.come = false;
        trace.past = false;
        trace.still_traced = true;
        return"still";
      }
      if (hh<=0, trace.past) {
        trace.past_traced = true;
        return "past";
      }
      if(trace.still_traced){
        return "still";
      }else{
        return "come"
      }
    }
    #trace(status, trace){
      if (status === "come" || status === "still") {
        trace.past = false;
      }
      return trace;
    }
    #correctTime(H,h,M,m,trace){
      let hh = H-h;
      let mm = M-m;
      if (hh>0) {
        trace.plus = true;
      }
      if (trace.plus && hh<0 || hh<-20) {
        hh=H+24-h;
      }
      if (mm<0) {
        if (hh>0) {
          hh=hh-1;
          mm=60+mm;
        } else if(hh<0) {
          mm=(-1)*mm;
        }
      }
      return {hh:hh,mm:mm};
    }
    static getKey(arr, key){
    	for (let i = 0; i < arr.length; i++) {
    		if (arr[i] === key) {
    			return i;
    		}
    	}
    	console.error('NOT FOUND ['+key+'] IN Array >>>', arr);
    	return 0;
    }
    static getStatus(h, H){
      if (H-h > 2) {
        return "still";
      } else if (H-h < 2 && H-h > 0) {
        return "come";
      } else if (H-h < 0) {
        return "past";
      }
    }
}

