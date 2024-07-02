function generateRandomLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomLetter = letters.charAt(randomIndex);
    document.getElementById('random-letter').textContent = randomLetter;
}
