//Logica Calculadora

operacao = 'X';

function opera(op){
    n1 = Number(document.getElementById('in1').value);
    n2 = Number(document.getElementById('in2').value);

    operacao = document.getElementById(op).innerHTML;
    document.getElementById('lb-operacao').innerHTML = operacao;

    switch(operacao){
        case 'X':
            resultado = n1 * n2;
            break
        case "/":
            resultado = n1 / n2;
            break
        case "+":
            resultado = n1 + n2;
            break
        case "-":
            resultado = n1 - n2;
            break
    }
    document.getElementById('out').innerHTML = String(resultado);
}

function limpa(){
    document.getElementById('in1').value = "";
    document.getElementById('in2').value = "";
    document.getElementById('out').innerHTML = "";
    document.getElementById('lb-operacao').innerHTML = '[]';
}