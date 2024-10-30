var windowImage = document.getElementById('window-image');
var legendaH1 = document.getElementById('legenda');

windowImage.addEventListener('mouseover', () => {
    if(windowImage.src != './assets/janela_quebrada.jpeg'){
        windowImage.src = './assets/janela_aberta.jpeg';
        legendaH1.textContent = 'Janela Aberta';
    }
})

windowImage.addEventListener('mouseout', () => {
    if(windowImage.src != './assets/janela_quebrada.jpeg'){
        windowImage.src = './assets/janela_fechada.jpeg';
        legendaH1.textContent = 'Janela Fechada';
    }
})


windowImage.addEventListener('click', () => {
    windowImage.src = './assets/janela_quebrada.jpeg';
    legendaH1.textContent = 'Janela Quebrada';
})
