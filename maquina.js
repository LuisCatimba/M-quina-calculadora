const strings = document.querySelectorAll('.string')
const input = document.querySelector('input')
const cleanInput = document.querySelector('.cleanInput')
const sliceString = document.querySelector('.sliceString')
const igual = document.querySelector('#igual')

strings.forEach(string => {
    string.addEventListener('click', event => {
        input.value += event.target.innerText
    })
})

//Limpar Campo

cleanInput.addEventListener('click', ()=>{
    input.value = ''
})

//Limpar um a um

sliceString.addEventListener('click', () => {
    input.value = input.value.slice(0, input.value.length-1)
})

//Realizando operaões

var operadoresValidos = ['*', '/', '/100', '.']
var operadoresInvalidos = ['×', '÷', '%', ',']

//Substituindo operadores inválidos para o js

igual.addEventListener('click', ()=>{
    operacao = input.value
    var newOperacao = input.value

    for(var i = 0; i <= operacao.length-1; i++){

        for(var j = 0; j <= operadoresInvalidos.length-1; j++){

                if(operacao[i] == operadoresInvalidos[j]){

                    newOperacao = operacao.replace(operacao[i], operadoresValidos[j])
                    operacao = newOperacao              

                }
        }
    }

  //Tratando erros nas operações
  try {
    eval(newOperacao )
  } catch (error) {
    input.value = 'Syntax Error'
    console.log(`Deu erro e o erro este. ${error.stack}`)
  }

  input.value = eval(newOperacao)
})