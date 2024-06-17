


var myInterval



 var d  = new Date('Nov 1, 2023')

 var eventTime = moment(d.getTime()).unix()
 var currentTime = moment(new Date().getTime()).unix()

 var diffTime = eventTime - currentTime
 var duration = moment.duration(diffTime * 1000, 'milliseconds')
 interval = 1000


 if(diffTime > 0){
   clearInterval(myInterval);
   myInterval = setInterview(function(){

     duration = moment.duration(duration.asMilliseconds() - interval,'milliseconds')

     var d = moment.duration(duration).days()
     h = moment.duration(duration).hours()
     m = moment.duration(duration).minutes()
     s = moment.duration(duration).seconds()

     d = $.trim(d).length === 1 ? '0' +d:d;
     h = $.trim(h).length === 1 ? '0' +h:h;
     m = $.trim(m).length === 1 ? '0' +m:m;
     s = $.trim(s).length === 1 ? '0' +s:s;

     $('.days').text(d + 'days');
     $('.hours').text(h + 'hours')
     $('.minutes').text(m + 'minutes')
     $('.seconds').text(s+ 'seconds')
   })
 }
