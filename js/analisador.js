const num = document.querySelector('#fnum');
const lista = document.querySelector('#flista');
const res = document.querySelector('#res');
const valores = []

function recebe(){
    if(eNumero(num.value) && !naLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor adicionado ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        res.innerHTML = 'Valor inválido ou já encontrado na lista'
    }

    num.value = '';
    num.focus();

}

function eNumero(n){
    if(Number(n) >=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

function naLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function conta(){
    if(valores.length == 0){
        res.innerHTML = 'Adicione valores antes de finalizar'
    }else{
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
            media = soma / total;
        }

        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} numeros cadastrados <br>`
        res.innerHTML += `O maior valor informado foi ${maior} <br>`
        res.innerHTML += `O menor valor informado foi ${menor} <br>`
        res.innerHTML += `A soma dos numeros é: ${soma} <br>`
        res.innerHTML += `A media dos numeros é: ${media} <br>`
    }
}