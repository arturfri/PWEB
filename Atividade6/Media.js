function leNotaEConverte(textoNota){
    return parseFloat(prompt(`Insira a ${textoNota} nota: `));
}

function calculaMedia(){
    let nome = prompt("Insira o nome do aluno: ");
    let n1 = leNotaEConverte("primeira");
    let n2 = leNotaEConverte("segunda");
    let n3 = leNotaEConverte("terceira");
    let n4 = leNotaEConverte("quarta");

    let media = (n1 + n2 + n3 + n4)/4;
    alert(`A média do aluno ${nome} é ${media.toFixed(2)}`)
}

calculaMedia();