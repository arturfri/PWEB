
const mediaIdades = (idades) => {
    return (idades.reduce((ac, v) => ac + v, 0) / idades.length).toFixed(1);
}

const maiorIdade = (idades) => idades.reduce((ac, v) => v > ac ? v : ac, 0);

const menorIdade = (idades) => idades.reduce((ac, v) => v < ac ? v : ac, 99999);

const calcQtdPessimos = (pessoas) => pessoas.filter(i => i.opniao == 1).length;

const calcPorcentQtdBom = (pessoas) => ((pessoas.filter(i => i.opniao == 4 || i.opniao == 3).length / pessoas.length) * 100).toFixed(1) + "%";

const calcQtdSexo = (pessoas, sexo) => pessoas.filter((i) => i.sexo == sexo).length;

const calculaResultados = () => {
    document.querySelector('#media-idades').innerHTML = mediaIdades(pessoas.map(i => i.idade));
    document.querySelector('#maior-idade').innerHTML = maiorIdade(pessoas.map(i => i.idade));
    document.querySelector('#menor-idade').innerHTML = menorIdade(pessoas.map(i => i.idade));
    document.querySelector('#qtd-pessimo').innerHTML = calcQtdPessimos(pessoas);
    document.querySelector('#qtd-bom').innerHTML = calcPorcentQtdBom(pessoas);
    document.querySelector('#respostas-mulheres').innerHTML = calcQtdSexo(pessoas, "Homem");
    document.querySelector('#respostas-homens').innerHTML = calcQtdSexo(pessoas, "Mulher");
}

calculaResultados();

const adicionarPessoa = () => {
    const inputIdade = parseInt(document.getElementById("age").value);
    const inputSexo = document.querySelector('input[name="gender"]:checked').value;
    const inputOpniao = parseInt(document.querySelector('input[name="opnion"]:checked').value);
    const pessoa = {
        idade: inputIdade,
        sexo: inputSexo,
        opniao: inputOpniao
    }
    pessoas.push(pessoa);
    calculaResultados();
}
