function show_date_time(){window.setTimeout("show_date_time()",1e3),BirthDay=new Date("06/28/2016 20:35:52"),today=new Date,timeold=today.getTime()-BirthDay.getTime(),sectimeold=timeold/1e3,secondsold=Math.floor(sectimeold),msPerDay=864e5,e_daysold=timeold/msPerDay,daysold=Math.floor(e_daysold),e_hrsold=24*(e_daysold-daysold),hrsold=setzero(Math.floor(e_hrsold)),e_minsold=60*(e_hrsold-hrsold),minsold=setzero(Math.floor(60*(e_hrsold-hrsold))),seconds=setzero(Math.floor(60*(e_minsold-minsold))),span_dt_dt.innerHTML="������������������"+daysold+"��"+hrsold+"ʱ"+minsold+"��"+seconds+"��"}function setzero(o){return o<10&&(o="0"+o),o}