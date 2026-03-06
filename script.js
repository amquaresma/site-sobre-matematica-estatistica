 // Função para calcular a média
 function calculateMean() {
    const input = document.getElementById('mean-input').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) return showError('mean-result');
    const mean = (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
    displayResult('mean-result', `Média: ${mean}`);
}

// Função para calcular a mediana
function calculateMedian() {
    const input = document.getElementById('median-input').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) return showError('median-result');
    const sorted = numbers.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0
        ? ((sorted[mid - 1] + sorted[mid]) / 2).toFixed(2)
        : sorted[mid].toFixed(2);
    displayResult('median-result', `Mediana: ${median}`);
}

// Função para calcular a moda
function calculateMode() {
    const input = document.getElementById('mode-input').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) return showError('mode-result');
    const frequency = {};
    numbers.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(key => frequency[key] === maxFreq).map(Number);
    const modeResult = modes.length === numbers.length
        ? 'Nenhuma (todos os valores têm a mesma frequência)'
        : modes.join(', ');
    displayResult('mode-result', `Moda: ${modeResult}`);
}

// Função para calcular porcentagem
function calculatePercentage() {
    const value = parseFloat(document.getElementById('percentage-value').value);
    const total = parseFloat(document.getElementById('percentage-total').value);
    if (isNaN(value) || isNaN(total) || total === 0) return showError('percentage-result');
    const percentage = ((value / total) * 100).toFixed(2);
    displayResult('percentage-result', `${percentage}% do total`);
}

// Função para calcular desvio padrão
function calculateStdDev() {
    const input = document.getElementById('stddev-input').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) return showError('stddev-result');
    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const variance = numbers.reduce((sum, num) => sum + Math.pow(num - mean, 2), 0) / numbers.length;
    const stdDev = Math.sqrt(variance).toFixed(2);
    displayResult('stddev-result', `Desvio Padrão: ${stdDev}`);
}

// Função para mostrar o resultado
function displayResult(elementId, message) {
    document.getElementById(elementId).innerHTML = message;
}

// Função para mostrar erros
function showError(elementId) {
    document.getElementById(elementId).innerHTML = `<span style="color: red;">Entrada inválida!</span>`;
}

// Função para resetar inputs e resultados
function resetInput(inputId, resultId = null) {
    document.getElementById(inputId).value = '';
    if (resultId) document.getElementById(resultId).innerHTML = '';
}