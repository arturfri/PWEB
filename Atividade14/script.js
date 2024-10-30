
const changeInputTextCase = (textcase) => {
    const inputText = document.getElementById('input-text');
    // const radioInputValue = document.querySelector('input[name="format"]:checked').value;
    if(textcase === 'uppercase'){
        inputText.value = inputText.value.toUpperCase();
    } else if (textcase === 'lowercase'){
        inputText.value = inputText.value.toLowerCase();
    }
}