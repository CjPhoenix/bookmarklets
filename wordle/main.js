switch (document.domain) {
    case 'www.nytimes.com':
        execute('nyt');
        
    case 'rbrignall.github.io':
    case 'www.byrdle.net':
        execute('byrdle');
        
    case 'nerdlegame.com':
        key_stats = 'statsState'
        key_state = 'gameState'
}

function execute(name) {
  fetch("https://raw.githubusercontent.com/CjPhoenix/bookmarklets/main/wordle/" + name + ".js").then((res) => res.text().then((t) => eval(t)))
}
