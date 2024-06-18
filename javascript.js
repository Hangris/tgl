function generateUnique4D(excludeNumbers, count = 10) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        } while (excludeNumbers.includes(randomNumber) || uniqueNumbers.has(randomNumber));
        uniqueNumbers.add(randomNumber);
    }
    return Array.from(uniqueNumbers);
}

document.getElementById('predictButton').addEventListener('click', () => {
    const input = document.getElementById('knownNumbers').value;
    const knownNumbers = input.split(',').map(num => num.trim());

    if (knownNumbers.length !== 10 || knownNumbers.some(num => num.length !== 4 || isNaN(num))) {
        alert("Masukkan tepat 10 angka 4D yang dipisahkan dengan koma, dan pastikan semuanya berupa angka 4 digit.");
        return;
    }

    const uniqueNumbers = generateUnique4D(knownNumbers, 10);

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Prediksi Angka 4D yang unik: <br>${uniqueNumbers.join(', ')}`;
});
