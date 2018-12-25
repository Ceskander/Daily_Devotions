/*chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse){
	if(request.action==="prefs"){
	    var prefsString = localStorage.prfes;
	    if(prefsString === undefined) {
		sendResponsed(undefined);
	    }
	    else{
		sendResponse(JSON.parse(localStorage.prefs));
	    }
	}
    });

function click(e) {
    chrome.tabs.query({currentWindow:true, active:true}, function(tabs)
                      console.log("background.js: click()");
                      var specTab = tabs[0];
                      chrome.tabs.insertCSS(specTab.id, {file: "popup2.css"});
                      });
}

chrome.browserAction.onClicked.addListener(click);

//so that when user clicks on icon a new tab opens with the link

chrome.browserAction.onClicked.addListener(function() {

                                           chrome.tabs.create({'http://gracepoint-berkeley-devotions.org/': chrome.extension.getURL('popup.html')}, function(tab) {
                                                              
                                                              });
                                           });

/*chrome.alarms.onAlarm.addListener(function( alarm ) {
                                  showNotification();
                                  });


function showNotification(storedData) {
    
    // Now create the notification
    chrome.notifications.create('reminder', {
                                type: 'basic',
                                iconUrl: 'DT_icon.png',
                                title: 'DT Reminder',
                                message: 'DT TIME!!!!'
                                }, function(notificationId) {});
    
}*/

/*
 Displays a notification with the current time. Requires "notifications"
 permission in the manifest file (or calling
 "Notification.requestPermission" beforehand).
 */
function show() {
    var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
    var hour = time[1] % 12 || 12;               // The prettyprinted hour.
    var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
    new Notification(hour + time[2] + ' ' + period, {
                     icon: 'DT_icon.png',
                     body: 'DT TIME!!!'
                     });
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
    localStorage.isActivated = true;   // The display activation.
   localStorage.frequency = 1;        // The display frequency, in minutes.
    localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.Notification) {
    // While activated, show notifications at the display frequency.
 
     //if (JSON.parse(localStorage.isActivated)) { show(); }
    
    var interval = 0; // The display interval, in minutes.
    var intervalHour=0;
    
    setInterval(function() {
                interval++;
                
                if (JSON.parse(localStorage.isActivated) && localStorage.frequency <= interval) {
                show();
                interval = 0;
                }
                }, 60000);
}




//added from clock timer

