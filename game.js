document.getElementById('user-form').addEventListener('submit', addUser);
document.getElementById('start-game').addEventListener('click', startGame);

let players = [];

function addUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;

    if (username && role) {
        const player = {
            name: username,
            role: role
        };
        players.push(player);
        updatePlayerList();
        document.getElementById('user-form').reset();
    }
}

function updatePlayerList() {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    players.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.name} (${player.role})`;
        playerList.appendChild(li);
    });
}

function startGame() {
    if (players.length >= 8 && players.length <= 18) {
        // Logik zum Starten des Spiels basierend auf den Spielern und deren Rollen
        console.log('Spiel startet mit folgenden Spielern:', players);
        alert('Das Spiel beginnt!');
    } else {
        alert('Das Spiel benötigt zwischen 8 und 18 Spieler.');
    }
}
