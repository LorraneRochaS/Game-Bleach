function Responderprompt(params) {

    var resposta = prompt('Digite  sua resposta');
    var contador = 2;
    while (contador >= 1) {
        if (resposta == 'c') {
            alert('Parabés! Resposta correta')
            window.location.assign('OrihimeF2.html');
            break
        } else {
            alert('Orihime ainda esta muito fraca. Tente novamente');
            contador--;
            resposta = prompt ('Digite  sua resposta');

        }
    }
    if (contador == 0) {
        window.location.assign('gameover.html')

    }
} 