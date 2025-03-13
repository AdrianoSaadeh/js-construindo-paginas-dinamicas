// const input = document.getElementById('input_item');
// const btnSalvar = document.getElementById('salvar_item');

//buscando por seletores CSS
const inputPelaClass = document.querySelector('.input-item');
const btnSalvarPelaClass = document.querySelector('.button-item');

btnSalvarPelaClass.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(inputPelaClass.value)
});

const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container", "checkbox");

const checkboxInput = document.createElement("input");
checkboxInput.type = "checkbox";
checkboxInput.classList.add("input", "fintcheckbox");

let contador = 0;
checkboxInput.id = `checkbox_${++contador}`;

const checkboxLabel = document.createElement("label");
checkboxLabel.appendChild(checkboxInput);
containerCheckbox.appendChild(checkboxLabel);

document.querySelector("#mainListContainer").appendChild(containerCheckbox);