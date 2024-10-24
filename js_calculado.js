document.getElementById('calcular').addEventListener('click', function() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const pais = document.getElementById('pais').value;

    if (comprimento > 0 && largura > 0 && altura > 0) {
        let divisor;
        switch (pais) {
            case 'brasil':
            case 'uruguai':
                divisor = 6000;
                break;
            case 'argentina':
                divisor = 4000;
                break;
            case 'mexico':
                divisor = 5000;
                break;
            case 'chile':
                divisor = 4505;
                break;
            case 'colombia':
                divisor = 4500;
                break;
            default:
                divisor = 6000; // valor padrão
        }
        
        const pesoVolumetrico = (comprimento * largura * altura) / divisor; // Cálculo do peso volumétrico
        document.getElementById('resultado').innerText = `Peso Volumétrico: ${pesoVolumetrico.toFixed(2)} kg`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
});
