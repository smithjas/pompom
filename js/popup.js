var enabled = true; //enabled by default
var myButton = document.getElementById('toggle');

chrome.storage.local.get('enabled', data => {
    if(data.enabled !=null){
      enabled = !!data.enabled;
    }
    myButton.textContent = enabled ? 'Disable PomPom' : 'Enable PomPom';
    if(enabled){
      document.getElementById('toggle').classList.add("enabled");
    }
    else{
      document.getElementById('toggle').classList.add("disabled");
    }

});

myButton.onclick = () => {
    enabled = !enabled;
    myButton.textContent = enabled ? 'Disable PomPom' : 'Enable PomPom';
    if(enabled){
      document.getElementById('toggle').classList.add("enabled");
      document.getElementById('toggle').classList.remove("disabled");
    }
    else{
      document.getElementById('toggle').classList.add("disabled");
      document.getElementById('toggle').classList.remove("enabled");
    }
    chrome.storage.local.set({enabled:enabled});
};
