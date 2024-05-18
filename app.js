
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");

var new_time = new Date()
var bakar_eid = new Date("7/20/2024")
var diff = bakar_eid.getTime() - new_time.getTime()

 var interval = setInterval(function () {
    var currentdate = new Date()
    
    diff - diff -1000 
    var days = diff / 1000 / 60 / 60 / 24
    var second = 60 - currentdate.getSeconds()
     var mins = 60 - currentdate.getMinutes()
     var hours = 24 -currentdate.getHours()
     if(second < 10 ){
        second 

     }
     
     box1.innerHTML = Math.floor(hours) 
     box2.innerHTML = Math.floor(mins) 
     box3.innerHTML = Math.floor(second) 
     box4.innerHTML = Math.floor(days) 

     
    },1000)

 
