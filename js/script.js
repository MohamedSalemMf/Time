// window.alert("Hello")    //Test

$(document).ready(function(){
    dt = new Date();
dt.setDate(dt.getDate() + 1);
    $('#app').squareCountDownClock({
        countdownDate: dt,
        topColor: 'gold',//orange,red,yellow
        innerLabelColor: 'skyblue'
    }).startTimer();
});
