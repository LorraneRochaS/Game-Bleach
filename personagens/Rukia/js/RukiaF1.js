function Responderprompt(params) {

    var resposta = prompt('Digite  sua resposta');
    var contador = 2;
    while (contador >= 1) {
        if (resposta == 'b') {
            alert('Parabés! Resposta correta')
            window.location.assign('RukiaF2.html');
            break
        } else {
            alert('Rukia precisa de sua ajuda. Tente novamente');
            contador--;
            resposta = prompt ('Digite  sua resposta');

        }
    }
    if (contador == 0) {
        window.location.assign('gameover.html')

    }
}