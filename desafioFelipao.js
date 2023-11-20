let vitorias = 50
let derrotas = 30
let dadosDoHeroi = calculadoraDePartidasRanqueadas(vitorias, derrotas)
let classificacaoDoHeroi = definindoClassificacao(dadosDoHeroi)

function calculadoraDePartidasRanqueadas(vit, der){
    return vit - der
}

function definindoClassificacao(dados){
    if(dados <= 10){
        classificacao = "Ferro"
    }else if(dados > 10 && dados <= 20){
        classificacao = "Bronze"
    }else if(dados > 20 && dados <= 50){
        classificacao = "Prata"
    }else if(dados > 50 && dados <= 80){
        classificacao = "Ouro"
    }else if(dados > 80 && dados <= 90){
        classificacao = "Diamante"
    }else if(dados > 90 && dados <= 100){
        classificacao = "Lendario"
    }else if(dados >= 100){
        classificacao = "Imortal"
    }

    return classificacao
}

console.log(`O Herói tem de saldo de ${dadosDoHeroi} está no nível de ${classificacaoDoHeroi}`)