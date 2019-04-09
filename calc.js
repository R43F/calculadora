//Logica Calculadora

operacao = 'X';
resultado = 0
seq = false


function realiza(op){

    n1 = Number(document.getElementById('in1').value);
    n2 = Number(document.getElementById('in2').value);

    operacao = document.getElementById(op).innerHTML;

    if(seq == true && resultado == 0){
        opera(n1, n2)
    }else if(seq == true && resultado != 0){
        opera(n1, n2)
        document.getElementById('in1').value = resultado;
        document.getElementById('in2').value = "";
        document.getElementById('out').innerHTML = "";
        document.getElementById('in2').focus()
    }else{
        opera(n1, n2)
    }
}
function opera(n1, n2){
    // n1 = Number(document.getElementById('in1').value);
    // n2 = Number(document.getElementById('in2').value);

    
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

function sequencia(x){
    if(seq == true){
        seq = false
        document.getElementById('ativo').style.color = 'red'
        document.getElementById('   lb-resultado').innerHTML = " "
    }else if(seq == false){
        seq = true
        document.getElementById('ativo').style.color = 'green'
        document.getElementById('lb-resultado').innerHTML = "="
    }
    // document.getElementById('in1').value = resultado;
    // document.getElementById('in2').value = "";
    // document.getElementById('out').innerHTML = "";
    // document.getElementById('in2').focus()
    // document.getElementById('ativo').style.color = 'green'
}