function gerarOpcaoComputador(){
    let opcaoComputador = Math.ceil(Math.random() * 10 / 3);
    if(opcaoComputador > 3){
        return gerarOpcaoComputador();
    }
    return opcaoComputador;
}

function parseEscolha(escolha){
    if(escolha == 1){
        return "Pedra";
    }else if(escolha == 2){
        return "Papel";
    } else {
        return "Tesoura";
    }
}

function jokenpo(){
    let opcaoUsuario;
    do{
        opcaoUsuario = parseInt(prompt("--- JOKENPO ---\n\nEscolha sua jogada\n1-Pedra\n2-Papel\n3-Tesoura\n4-Sair"));
        let opcaoComputador = gerarOpcaoComputador();
        // alert(parseEscolha(opcaoUsuario));
        
        switch(opcaoUsuario){
            case 1:
                if(opcaoComputador == 2){
                    alert(`--- PERDEU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else if (opcaoComputador == 3){
                    alert(`--- GANHOU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else {
                    alert(`--- EMPATE ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                }
            break;
            case 2:
                if(opcaoComputador == 3){
                    alert(`--- PERDEU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else if (opcaoComputador == 1){
                    alert(`--- GANHOU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else {
                    alert(`--- EMPATE ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                }
            break;
            case 3:
                if(opcaoComputador == 1){
                    alert(`--- PERDEU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else if (opcaoComputador == 2){
                    alert(`--- GANHOU ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                } else {
                    alert(`--- EMPATE ---\n\nSua escolha: ${parseEscolha(opcaoUsuario)}\nEscolha do computador: ${parseEscolha(opcaoComputador)}`);
                }
            break;
            case 4:
                return;
            default:
                alert("Selecione uma opção válida")
        }
    }while(opcaoUsuario != 4);
}

jokenpo();