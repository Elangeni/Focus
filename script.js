//Global variables
var minutes = 25;
var seconds = 0;

var sessionMinutes = 25;
var breakMinutes = 5;

var flag = false;
var temp = true;

var minutes_interval = "";
var seconds_interval = "";

// Initialize sounds
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template(){
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = "00";

  document.getElementById("session-text").innerHTML = minutes + ":00";
  document.getElementById("break-text").innerHTML = breakMinutes + ":00";
}

function prestart(){
  minutes -= 1;
  seconds = 59;
}

function start(){

  //Set flag to true so that the user must stop timer to edit time
  flag = true;
  click.play();
  document.getElementById("play-button").style.display = "none";
  document.getElementById("pause-button").style.display = "block";



  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

minutes_interval = setInterval(minutesTimer, 1000);
  seconds_interval = setInterval(secondsTimer, 1000);
  




  function minutesTimer(){

    if(seconds == 60){
      minutes -= 1;
    }
    console.log(minutes);
    document.getElementById("minutes").innerHTML = minutes;

    if(minutes == 0 && seconds == 0){
      bell.play();
    }
  }

  function secondsTimer(){
    seconds -= 1;
    document.getElementById("seconds").innerHTML = seconds;

    if(seconds<10){
      document.getElementById("seconds").innerHTML = "0" + seconds.toString();
    }

    //Fix me
    if(seconds <= 0){
      if(minutes == 0){
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        bell.play();

        document.getElementById("done").innerHTML =
        "Session completed! Take a break.";
        document.getElementById("done").classList.add("show_message");
      }
      seconds = 60;
    }
  }

}

//Change the session length
  function increaseSession(){
    //Check if timer has already started
    if(flag){
      alert("Please stop and reset the timer to make any changes.");
    }
    if(minutes < 60){
      minutes+=1;
      console.log(minutes)
      document.getElementById("session-text").innerHTML = minutes + ":00";
      document.getElementById("minutes").innerHTML = minutes;
    }else{
      alert("Session cannot be longer than 60 minutes.")
    }
  }

  function decreaseSession(){
    //Check if timer has already started
    if(flag){
      alert("Please stop and reset the timer to make any changes.");
    }
    if(minutes > 5){
      minutes-=1;
      console.log(minutes)
      document.getElementById("session-text").innerHTML = minutes + ":00";
      document.getElementById("minutes").innerHTML = minutes;
    }else{
      alert("Session must be at least 5 minutes.")
    }

  }

//Change the break length
  function increaseBreak(){
    //Check if timer has already started
    if(flag){
      alert("Please stop and reset the timer to make any changes.")
    }
    if(breakMinutes < 25){
      breakMinutes+=1;
      document.getElementById("break-text").innerHTML = breakMinutes + ":00";
    }else{
      alert("Break cannot be longer than 25 minutes.")
    }
  }

  function decreaseBreak(){
    //Check if timer has already started
    if(flag){
      alert("Please stop and reset the timer to make any changes.")
    }
    if(breakMinutes > 2){
      breakMinutes-=1;
      document.getElementById("break-text").innerHTML = breakMinutes + ":00"
    }else{
      alert("Break must be at least 2 minutes.")
    }
  }

  //Pause button functionality
  function pause(){
    click.play();
    document.getElementById("pause-button").style.display = "none";
    document.getElementById("resume-button").style.display = "block";
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
  }

  //Resume the Timer
  function resume(){
    click.play();
    document.getElementById("resume-button").style.display = "none";
    document.getElementById("pause-button").style.display = "block";
    start()
  }
