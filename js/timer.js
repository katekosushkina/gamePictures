var initialTime = 15;
var timeX = convertTime(initialTime);
timeX = (null == localStorage.getItem("time")) ? timeX : localStorage.getItem("time");
var paused = false;

$(document).ready(function () {
	   $(function() {
    $( "#dialog2" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 500
      },
      hide: {
        effect: "blind",
        duration: 500
      },
      modal: true,
	  draggable: false,
	  height:200
    });
});


	$("#timer").text(timeX);

    startTimer();
	
	  $( "#play" ).click(function() {
		resetStorage();
		  
	});
	
	
  $( ".options" ).click(function() {
		resetStorage();
		  
	});
	
	$( "#opener" ).click(function() {
          if((($( "#dialog" ).dialog( "open" )) || ($( "#dialog1" ).dialog( "open" )) || ($( "#dialog2" ).dialog( "open" )))){        
            paused = true;
          }
      });




});

function convertTime(iTime) {
	return Math.floor(initialTime / 60) + ":" + (initialTime % 60) + ":00";
}

function resetStorage() {
    localStorage.removeItem("time");
	timeX = convertTime(initialTime);
	$("#timer").text(timeX);
}

function startTimer() {
	startTime = (null == localStorage.getItem("time")) ? timeX : localStorage.getItem("time");
	$("#timer").text(startTime);
	
	var time = $("#timer").text().split(":");
	var h = time[0], m = time[1], s = time[2];
	
	if (s == 0) {
		if (m == 0) {
			if (h == 0) {
				localStorage.removeItem("time");
                $( "#dialog2" ).dialog( "open" );
				return;
			}
			h--;
			m = 60;
			if (h < 10) h = "0" + h;
		}
		m--;
		if (m < 10) m = "0" + m;
		s = 59;
	}
	else s--;
	if (s < 10) s = "0" + s;
	$("#timer").text(h + ":" + m + ":" + s);
	timeX = h + ":" + m + ":" + s;
	localStorage.setItem("time", timeX);   
	if (!paused) {
        setTimeout(function () { startTimer() }, 1000);
    }

}
