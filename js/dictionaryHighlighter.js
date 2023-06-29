chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
      for (var i = 0; i < simDictionary.length; i++) {
        let instance = new Mark(document.querySelector('body'));
        let simTerm = simDictionary[i].title;
        instance.mark(simTerm, {
            "element": "span",
            "className": "highlight",
            "separateWordSearch": "true",
            "accuracy": {
                "value": "exactly",
                "limiters": [",", ".", "(", ")"]
            },
            "dataTitle": "🐧 "+simDictionary[i].definition,"exclude": [
              "h1","h2","h3","h4","h5"
            ]
        });
      }
    }
});
