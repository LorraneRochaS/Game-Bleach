function Responderprompt(params) {

    var resposta = prompt('Digite  sua resposta');
    var contador = 2;
    while (contador >= 1) {
        if (resposta == 'a') {
            alert('Parabés! Resposta correta')
            window.location.assign('Venceu.html');
            break
        } else {
            alert('Orihime ainda está muito fraca. Tente novamente');
            contador--;
            resposta = prompt ('Digite  sua resposta');

        }
    }
    if (contador == 0) {
        window.location.assign('gameover.html')

    }
}