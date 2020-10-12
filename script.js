var minutes = 25;
var seconds = "00";

// Initialize sounds
var click = new Audio("click.mp3");
var bell = new Audio("bell.mp3");

function template(){
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start(){
  click.play();

  minutes = 24;
  seconds = 59;

  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer(){
    minutes -= 1;
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
