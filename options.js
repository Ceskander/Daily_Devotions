/*
  Grays out or [whatever the opposite of graying out is called] the option
  field.
*/


//code that actually works
function ghost(isDeactivated) {
  options.style.color = isDeactivated ? 'graytext' : 'black';
                                              // The label color.
  options.frequency.disabled = isDeactivated; // The control manipulability.
}

window.addEventListener('load', function() {
  // Initialize the option controls.
  options.isActivated.checked = JSON.parse(localStorage.isActivated);
                                         // The display activation.
  options.frequency.value = localStorage.frequency;
                                         // The display frequency, in minutes.

  if (!options.isActivated.checked) { ghost(true); }

  // Set the display activation and frequency.
  options.isActivated.onchange = function() {
    localStorage.isActivated = options.isActivated.checked;
    ghost(!options.isActivated.checked);
  };

  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };
});

//added for current time
window.onload = function() {
    
    clock();
    
    function clock() {
        var now = new Date();
        var TwentyFourHour = now.getHours();
        var hour = now.getHours();
        var min = now.getMinutes();
        var mid = 'pm';
        if (min < 10) {
            min = "0" + min;
        }
        
        if (hour > 12) {
            hour = hour - 12;
        }
        
        if(hour==0){
            hour=12;
        }
        
        if(TwentyFourHour < 12) {
            mid = 'am';
        }
        
        document.getElementById('currentTime').innerHTML = hour+':'+min + mid ;
        setTimeout(clock, 1000);
        
    }
    
    
    
}





//added for clock alarm






