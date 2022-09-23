async function buscaEMostraPersonagens () {
    const idPersonagem = pegarValordoInput ("#idPersonagem")
    const personagem = await buscarPersonagemNaApi (idPersonagem)        
    montarTelaComDadosPersonagem (personagem)

   
     console.log(`O id do Personagem é ${idPersonagem}`)
}

function pegarValordoInput (seletorInput){
    let valor = document.querySelector(seletorInput).value
    return valor
}


async function buscarPersonagemNaApi (parametro){

    const url = "https://rickandmortyapi.com/api/character/" + parametro
    const response = await fetch(url)
    const responseData = await response.json()
    console.log(responseData)

    return responseData
}


function montarTelaComDadosPersonagem (parametro){
    const charactercontainer = document.querySelector("#character-container")
        charactercontainer.style.display= "block"

    const elementoImagem = document.querySelector("#personagemimg")   
    const nomecharacter = document.querySelector("#nomecharacter") 

    elementoImagem.src = parametro.image
    nomecharacter.innerHTML = parametro.name

}