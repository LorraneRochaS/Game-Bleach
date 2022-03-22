function Responderprompt(params) {



var resposta = prompt('Digite  sua resposta');
var contador = 3;
while (contador >= 1) {
    if (resposta == 'c') {
        alert('Parabés! Vencemos')
        window.location.assign('Venceu.html');
        break
    } else {
        alert('Ichigo foi fortemente golpeado. Tente novamente');
        contador--;
        resposta = prompt ('Digite  sua resposta');

    }
}
if (contador == 0) {
    window.location.assign('gameover.html')

}
}