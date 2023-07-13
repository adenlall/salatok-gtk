

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
    
    Parse(raw, enabled, f){ // todo fix after 00:00 but befor midnight
        let arr = [];
        let date = new Date();
        let h = 23//date.getHours();
        let m = 55//date.getMinutes();
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
                status = this.#getStatus(tt.hh,trace);
                if ((status === "come" || status === "still")&& trace.next) {
                  next.name = enabled[i][0];
                  next.time = raw[enabled[i][0]];
                  trace.next = false;
                }
                arr.push([enabled[i][0], raw[enabled[i][0]],  tt.hh+"h "+tt.mm+"min", status ? status : "past"]);
              }
        }
        if (trace.next) {
          next.name = "fajr";
          next.time = "next day";
        }
        return {data:arr, next:next};
    }
    
    #getStatus(hh,trace){
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
      
      console.error('undefined', hh, trace);
    }
    
    #trace(status, trace){
      if (status === "come" || status === "still") {
        trace.past = false;
      }
      return trace;
    }
    #next(bool, hh, enabled, raw, i){
      let next={};
      if(bool && hh>=0){
        next.name = enabled[i][0];
        next.time = raw[enabled[i][0]];
        bool = false;
      }
      return next;
    }
    #correctTime(H,h,M,m,trace){
      let hh = H-h;
      let mm = M-m;
      console.log('lohg');
      
      console.log(H,h,M,m);
      console.log('message');
      
      if (hh>0) {
        trace.plus = true;
      }
      if (trace.plus && hh<0) {
        hh=H+24-h;
      }
      
      if (mm<0) {
        mm=hh>0?60+mm:'';
        mm=hh=0 ?:-(60+mm)
        if (hh<0) {
          //TODO
        }
        
        if (hh>0) {
          hh=hh-1;
        }else if(hh<0) {
          hh=hh+1;
        }
      }
      return {hh:hh,mm:mm};
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

