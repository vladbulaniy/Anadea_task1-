jQuery(document).ready(function ($) {
    
var arrayDates = $('[data-interval]');

$.each(arrayDates, function(){ 
  var currentObj = $(this); 
  var dates = $(this).attr('data-interval');     
  var arr = dates.split(','); 
  divide(arr, currentObj);   
});

function divide (data, currentObj){ 
    console.log('data1',data);
    data = data.sort();
    console.log('data2',data);
    var dateStart = data[0];
    var dateEnd = data[data.length-1];
    var day = makeDifferent(dateStart.split('T')[0],dateEnd.split('T')[0], currentObj);    
}

function makeDifferent(first, second, currentObj){
    var converted1 = Date.parse(first);
    var converted2 = Date.parse(second);  
    var different = converted2 - converted1;
    var daysDifferent = ( ( ( different/1000 )/60 )/60 )/24; 
    makeView(converted1, converted2, daysDifferent, currentObj);
}

function makeTextMonth(data){
    var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    return months[data]; 
}
 
function makeView(first, second, differentData, currentObj){
    
    var yDateStart = new Date(first).getFullYear();
    var yDateEnd = new Date(second).getFullYear();
    var mDateStart = new Date(first).getMonth();
    var mDateEnd = new Date(second).getMonth(); 
    var dDateStart = new Date(first).getDate();
    var dDateEnd = new Date(second).getDate(); 
        
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
    $(currentObj).text(firstData + ' - ' + secondData + ', ' + differentData + ' days');
};

});//end
