/*const nome = prompt("Ola, me diga o seu nome ");
alert("Que legal " + nome + " vamos pra frente");
confirm("Voce gosta de JS");
document.write(`olá, seu nome é ${nome}! seu nome tem ${nome.length} letras.<br><br>`);
document.write(`O seu nome maiusculo é ${nome.toUpperCase()}.<br><br>`);
document.write(`O seu nome minusculo é ${nome.toLowerCase()}.<br><br>`);

const p1 = document.getElementsByTagName('p')[0];
const h1 = document.getElementsByTagName('h1')[0];


document.write('Esta escrito o seguinte: ' + p1.innerText + '<br><br>');//pega o texto somente
document.write('Esta escrito o seguinte: ' + p1.innerHTML +'<br><br>');//pega o texto + foratação
h1.style.color = '#4B0082';

const p2 = document.querySelector('.msg');

p2.style.background = 'lightblue';
p2.style.color = 'blue';
p2.innerText = 'Ignore o Olá';*/


const a1 = document.querySelector('.a-1');
a1.addEventListener('click', clicar1);
a1.addEventListener('mouseenter', entrou1);
a1.addEventListener('mouseout', saiu1);


function entrou1(){
    a1.innerText = 'Entrou'
}

function clicar1(){
    a1.innerText = 'Clicou';
    a1.style.background = 'red'

}

function saiu1(){
    a1.innerText = 'Saiu';
    a1.style.background = 'blue'

}

const a2 = document.querySelector('.a-2');
a2.addEventListener('click', clicar2);
a2.addEventListener('mouseenter', entrou2);
a2.addEventListener('mouseout', saiu2);


function entrou2(){
    a2.innerText = 'Entrou'
}

function clicar2(){
    a2.innerText = 'Clicou';
    a2.style.background = 'red'

}

function saiu2(){
    a2.innerText = 'Saiu';
    a2.style.background = 'green'

}

const a3 = document.querySelector('.a-3');
a3.addEventListener('click', clicar3);
a3.addEventListener('mouseenter', entrou3);
a3.addEventListener('mouseout', saiu3);


function entrou3(){
    a3.innerText = 'Entrou'
}

function clicar3(){
    a3.innerText = 'Clicou';
    a3.style.background = 'red'

}

function saiu3(){
    a3.innerText = 'Saiu';
    a3.style.background = 'purple'

}

const somar = document.querySelector('#somar');
somar.addEventListener('click', somarMuitos);

function somarMuitos(){
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');
    const res = document.querySelector('.res');

    const varTxt1 = Number(txt1.value);
    const varTxt2 = Number(txt2.value);
    const s = varTxt1 + varTxt2;
    res.innerHTML = `A soma entre ${varTxt1} e ${varTxt2} é igual a ${s}`    
}

const nacBotao = document.querySelector('#nacBotao');
nacBotao.addEventListener('click', clicou1)

function clicou1(){
    const nacao = document.querySelector('#nativo');
    const mora = document.querySelector('.mora');
    const pais = String(nacao.value) 

    if(pais == 'Brasil'){
        mora.innerText= 'Você é Brasileiro';
    } else {
        mora.innerText= 'Você é Estrangeiro';
    }
}

const multaBotao = document.querySelector('#multaBotao');
multaBotao.addEventListener('click', acaoBotao);

function acaoBotao(){
    const txtvel = document.querySelector('#txtvel');
    const multaRes = document.querySelector('.resMulta');
    const vel = Number(txtvel.value)
    if(vel <= 60){
        multaRes.innerText = `Você ésta a ${vel}km\h esta dentro da velocidade permitida`
    } else(multaRes.innerText = `Você ésta a ${vel}km\h esta fora da velocidade permitida, multado(a)`)
}

const idadeBotao = document.querySelector('#idadeBotao');
idadeBotao.addEventListener('click', iBtn);

function iBtn(){
    const idade = document.querySelector('#idade');
    const resIdade = document.querySelector('.resIdade');
    const age = Number(idade.value);

    if (age < 16){
        resIdade.innerHTML = 'Você ainda não pode votar'
    } else if (age < 18 || age > 65){
        resIdade.innerHTML = 'Você pode votar opcinalmente'
    } else{
        resIdade.innerHTML = 'Voto obrigatorio'
    }
}

const cumprimentoBotao = document.querySelector('#cumprimentoBotao');
cumprimentoBotao.addEventListener('click', cumprimentoBtn);

function cumprimentoBtn(){
    const cumprimento = document.querySelector('#cumprimento');
    const resCumprimento = document.querySelector('.resCumprimento');
    const cumprimentoNumero = Number(cumprimento.value);

    if(cumprimentoNumero <= 12){
        resCumprimento.innerHTML = 'Bom dia'
    } else if(cumprimentoNumero <=18 ){
        resCumprimento.innerHTML = 'Boa tarde'
    } else(
        resCumprimento.innerHTML = 'Boa noite'
    )
}

const hour = new Date().toLocaleTimeString();
const agora = new Date();
const diaSem = agora.getDay();

const horario = document.querySelector('.horario');
const diaSemana = document.querySelector('.diaSemana');

horario.innerHTML = `Agora são ${hour} horas`

switch(diaSem){
    case 0:
        diaSemana.innerHTML = 'Hoje é Domingo';
        break
    case 1:
        diaSemana.innerHTML = 'Hoje é segunda feira';
        break
    case 2:
        diaSemana.innerHTML = 'Hoje é Terça feira';
        break
    case 3:
        diaSemana.innerHTML = 'Hoje é Quarta feira';
        break
    case 4:
        diaSemana.innerHTML = 'Hoje é Quinta feira';
        break
    case 5:
        diaSemana.innerHTML = 'Hoje é Sexta feira';
        break
    case 6:
        diaSemana.innerHTML = 'Hoje é Sabado';
        break    
    default:
        diaSemana.innerHTML = 'Invalido';
        break
}

const passoBotao = document.querySelector('#passoBotao');
passoBotao.addEventListener('click', passoBtn);

function passoBtn(){
    const passos = document.querySelector('#passos');
    const resPassos = document.querySelector('.resPassos');
    const pas = Number(passos.value);

    for(let c = 1; c <= pas; c++){
        resPassos.innerHTML += `Você deu ${c} passos`;
    }
}
