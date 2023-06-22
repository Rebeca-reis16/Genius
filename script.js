const Vermelho = document.getElementById('Vermelho')
const Amarelo= document.getElementById('Amarelo')
const Verde= document.getElementById('Verde')
const Azul= document.getElementById('Azul')
const maquina = document.getElementById('jogadorMaquina')

let vetjogador=[], vetmaq=[];
jogar();

Vermelho.onclick = ()=>{

    setTimeout(()=>{
        Vermelho.style.backgroundColor='#d10000'
    },500);
        Vermelho.style.backgroundColor='#FA8072'
      vetjogador.push(1)
      console.log('jogador' + vetjogador);
}
Amarelo.onclick = ()=>{

    setTimeout(()=>{
        Amarelo.style.backgroundColor='#f6ff00'
    },500);
    Amarelo.style.backgroundColor='#ECDB00'
    vetjogador.push(3)
      console.log('jogador' + vetjogador);
}
Verde.onclick = ()=>{

    setTimeout(()=>{
        Verde.style.backgroundColor='#2bff01'
    },500);
    Verde.style.backgroundColor='#3CB371'
    vetjogador.push(2)
      console.log('jogador' + vetjogador);
}
Azul.onclick = ()=>{

    setTimeout(()=>{
        Azul.style.backgroundColor='#2b2bf0'
    },500);
        Azul.style.backgroundColor='#00BFFF'
        vetjogador.push(4)
      console.log('jogador' + vetjogador);
}
jogadorMaquina.onclick = ()=>{
    jogar();
};
function jogar() {
    vetmaq.push(Math.floor(Math.random()* 4 + 1));
    console.log('Maquina' + vetmaq);
};