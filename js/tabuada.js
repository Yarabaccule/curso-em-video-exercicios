
function tabuada(){
    const num = document.querySelector('#txtn');
    const tab = document.querySelector('#seltab');
    const restabuada = document.querySelector('#restabuada');
    const p = document.querySelector('.preResultado');


    if(num.value.length == 0){
        restabuada.innerHTML = '[ERRO] Numero não digitado, digite um numero!'
        p.style.width = ''
        p.style.color = 'red'
        p.style.background = '';
    } else{
        let n = Number(num.value);
        restabuada.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            p.style.width = '200px'
            p.style.background = 'lightgray';
            restabuada.innerHTML += `${c} x ${n} = ${n*c} <br>` 
        }
    }
}