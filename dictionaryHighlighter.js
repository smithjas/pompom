for (var i = 0; i < simDictionary.length; i++) {
  let instance = new Mark(document.querySelector('body'));
  instance.mark(simDictionary[i].title, {
      "element": "span",
      "className": "highlight",
      "dataTitle": "🐧 "+simDictionary[i].definition,"exclude": [
        "h1","h2","h3","h4","h5"
    ]
  });
}
