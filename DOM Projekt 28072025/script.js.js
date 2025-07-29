// Funktion zum Aktivieren einer Farb-Box
function activate(color) {
    // Alle Boxen finden
    const boxes = document.querySelectorAll('.box');
    
    // Alle aktiven Klassen entfernen
    boxes.forEach(box => {
        box.classList.remove('active');
    });
    
    // Die ausgewählte Box aktivieren
    const selectedBox = document.querySelector(`.${color}`);
    selectedBox.classList.add('active');
    
    // Farbnamen im Output anzeigen
    const output = document.getElementById('output');
    const colorNames = {
        'red': 'Rot',
        'blue': 'Blau',
        'green': 'Grün'
    };
    
    output.textContent = `Aktive Farbe: ${colorNames[color]}`;
}
