jQuery(document).ready(function ($) {
    
var arrayDates = $('[data-interval]');

$.each(arrayDates, function(){
  var currentObj = $(this); 
  var dates = $(this).attr('data-interval');
  var arr = dates.split(','); 
  var day = divide(arr, currentObj);   
});

function divide (data, currentObj){
    var dateStart = data[0];
    var dateEnd = data[data.length-1];
    dateStart = dateStart.split('T')[0];
    dateEnd = dateEnd.split('T')[0];
    var day = makeDifferent(dateStart,dateEnd, currentObj);
    return day;
}

function yDate(data){
   var myNewDate = new Date(data); 
    return myNewDate.getFullYear();    
}

function mDate(data){
   var myNewDate = new Date(data);
    return myNewDate.getMonth();   
}

function dDate(data){
   var myNewDate = new Date(data); 
   return myNewDate.getDate();    
}

function makeYMD(first, second, daysDifferent, currentObj){
    var yDateStart = yDate(first);
    var yDateEnd = yDate(second); 
    var mDateStart = mDate(first);
    var mDateEnd = mDate(second); 
    var dDateStart = dDate(first);
    var dDateEnd = dDate(second); 
    makeView(yDateStart, yDateEnd, mDateStart, mDateEnd, dDateStart, dDateEnd, daysDifferent, currentObj);
}

function makeDifferent(first, second, currentObj){
    var converted1 = Date.parse(first);
    var converted2 = Date.parse(second);  
    var different = converted2 - converted1;
    var day = ( ( ( different/1000 )/60 )/60 )/24; 
    makeYMD(converted1, converted2, day, currentObj);
    return day;
}

function makeTextMonth(data){
    var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    return months[data]; 
}
 
function makeView(yDateStart, yDateEnd, mDateStart, mDateEnd, dDateStart, dDateEnd, differentData, currentObj){
    var firstData = '';
    var secondData = '';
    if(yDateStart != yDateEnd){
        firstData = firstData + yDateStart + ' '; 
        secondData = secondData + yDateEnd + ' '; 
    }    
    if(mDateStart != mDateEnd){
        textmDateStart = makeTextMonth(mDateStart);
        textmDateEnd = makeTextMonth(mDateEnd);
        firstData = firstData + textmDateStart + ' '; 
        secondData = secondData + textmDateEnd + ' '; 
    }    
    firstData = firstData + dDateStart; 
    secondData = secondData + dDateEnd;   
    view(firstData, secondData, differentData, currentObj);
};

function view(firstData, secondData, differentData, currentObj){
     outDate = firstData + ' - ' + secondData + ', ' + differentData + ' days';  
     console.log('view currentObj', currentObj);
    $(currentObj).text(outDate);
};


});//end
