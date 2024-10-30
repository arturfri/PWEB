
function Retangulo(x, y){
    this.calcArea = () => x * y;
}

const objRet1 = new Retangulo(10,2);
const areaObjRet1 = objRet1.calcArea();

class Conta {
    constructor(){
        this.nomeCorrentista;
        this.banco;
        this.numConta;
        this.saldo;
    }

    get nomeCorrentista (){
        return this.nomeCorrentista;
    }
    get banco (){
        return this.banco;
    }
    get numConta (){
        return this.numConta;
    }
    get saldo (){
        return this.saldo;
    }
    
    set nomeCorrentista (nomeCorrentista) {
        this.nomeCorrentista = nomeCorrentista;
    }
    set banco (banco) {
        this.banco = banco; 
    }
    set numConta (numConta) {
        this.numConta =  numConta;
    }
    set saldo (saldo) {
        this.saldo = saldo; 
    }
}

class ContaCorrente extends Conta {
    constructor(){
        super();
        this.saldoEspecial;
    }

    get saldoEspecial (){
        return this.saldoEspecial;
    }
    
    set saldoEspecial (saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
}


class ContaPoupanca extends Conta {
    constructor(){
        super();
        this.juros;
        this.dataVencimento;
    }

    get juros (){
        return this.juros;
    }
    
    set juros (juros) {
        this.juros = juros;
    }

    get dataVencimento (){
        return this.dataVencimento;
    }
    
    set dataVencimento (dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
}