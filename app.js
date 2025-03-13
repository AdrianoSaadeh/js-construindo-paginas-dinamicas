// const input = document.getElementById('input_item');
// const btnSalvar = document.getElementById('salvar_item');

const inputPelaClass = document.getElementsByClassName('.input-item');
const btnSalvarPelaClass = document.getElementById('.button-item');

btnSalvarPelaClass.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(inputPelaClass.value)
});