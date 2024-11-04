const form = document.getElementById('formulario')
const imgAprovado = '<img src="./aprovado.png" alt="Emoji Feliz">'
const imgReprovado = '<img src="./reprovado.png" alt="Emoji triste">'
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite sua nota mínima"))
const atividades = []
const notas = []
let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionarLinha()
    atualizaTabela()
    atualizaMedia()

})

function adicionarLinha(){

    const nomeAtividade = document.getElementById('nome-atividade')
    const notaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(nomeAtividade.value)){
        alert(`A atvidade ${nomeAtividade.value} já estar inserida`)
    }
    else{

        atividades.push(nomeAtividade.value)
        notas.push(parseFloat(notaAtividade.value))
        
    
        let linha = '<tr>'
        linha += `<td> ${nomeAtividade.value}`
        linha += `<td> ${notaAtividade.value}`
        linha += `<td> ${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`
        linha += '</tr>'
        linhas += linha
    }




    nomeAtividade.value = ''
    notaAtividade.value = ''
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMedia(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado 
    


}

function calculaMediaFinal(){
    let somaDasNotas = 0

    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}