let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

setInterval(() => {
  let date = new Date();
  let getDate=date.getDate()
  if(getDate<10){
     days.innerHTML=`0${date.getDate()}` 
  }
else{
  days.innerHTML=`${date.getDate()}`
}
  let getHours=date.getHours()
  if(getHours<10){
    hours.innerHTML=`0${date.getHours()}` 
  }
else{
 hours.innerHTML=`${date.getHours()}`
}
  let getMinutes=date.getMinutes()
  if(getMinutes<10){
     minutes.innerHTML=`0${date.getMinutes()}` 
  }
else{
  minutes.innerHTML=`${date.getMinutes()}`
}
  let getSeconds=date.getSeconds()
  if(getSeconds<10){
     seconds.innerHTML=`0${date.getSeconds()}` 
  }
else{
  seconds.innerHTML=`${date.getSeconds()}`
}
}, 1000);




 