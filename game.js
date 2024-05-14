document.getElementById('start-game').addEventListener('click', startGame);

function startGame() {
    alert('Das Spiel beginnt!');
    // Initialisierung des Spiels
    // Implementieren Sie hier die Spielregeln und Logik
}

// Beispiel für das Starten des Spiels
function initializeGame(players) {
    let roles = assignRoles(players);
    // Weitere Initialisierungen
}

function assignRoles(players) {
    // Logik zum Zuweisen der Rollen
    // Beispiel: 2 Werwölfe, 1 Seherin, Rest Dorfbewohner
    let roles = [];
    roles.push('Werwolf', 'Werwolf', 'Seherin');
    for (let i = 3; i < players.length; i++) {
        roles.push('Dorfbewohner');
    }
    return shuffleArray(roles);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
