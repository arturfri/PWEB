function operacoes(){
    let n1 = parseFloat(prompt("Insira o primeiro número"));
    let n2 = parseFloat(prompt("Insira o segundo número"));

    let opcao = 0;
    do{
        opcao = parseInt(prompt("Selecione a operação\n1-Soma\n2-Subtração\n3-Produto\n4-Divisão\n5-Resto da divisão\n6-Sair"));
        switch(opcao){
            case 1:
                let soma = n1 + n2;
                alert(`Soma: ${soma.toFixed(2)}`);
            break;
            case 2:
                let sub = n1 - n2;
                alert(`Subtração: ${sub.toFixed(2)}`);
            break;
            case 3:
                let prod = n1 * n2;
                alert(`Produto: ${prod.toFixed(2)}`);
            break;
            case 4:
                let divi = n1 / n2;
                alert(`Divisão: ${divi.toFixed(2)}`);
            break;
            case 5:
                let rest = n1 % n2;
                alert(`Resto de divisão: ${rest.toFixed(2)}`);
            break;
            case 6:
                return;
            default:
                alert("Selecione uma opção válida")
        }
    }while(opcao < 6)
}

operacoes();