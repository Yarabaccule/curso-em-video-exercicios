const verIdade = document.querySelector('#verIdade');
verIdade.addEventListener('click', ver);

function ver(){
    const data = new Date();
    const ano = data.getFullYear();

    const res = document.querySelector('.res');
    const idade = document.querySelector('#idade');

    if(idade.value.length == 0 || idade.value > ano){
        res.innerHTML = '[ERRO] Verifique os seus dados e tente novamente';
        res.style.color = 'red';
    } else{
        const sex = document.getElementsByName('checkSex');
        const age = ano - Number(idade.value);
        const img = document.querySelector('#pessoas')
        let genero = '';

        if(sex[0].checked){
            genero = 'Feminino';
            if (age < 14){
                img.src = './img/Capturar.PNG'
            }else if(age < 21){
                img.src = './img/Capturar2.PNG'
            }else if (age < 50){
                img.src = './img/Capturar6.PNG'
            } else{
                img.src = './img/Capturar7.PNG'
            }
        } else if(sex[1].checked){
            genero = 'Masculino';
            if (age < 14){
                img.src = './img/Capturar9.PNG'
            }else if(age < 21){
                img.src = './img/Capturar3.PNG'
            }else if (age < 50){
                img.src = './img/Capturar4.PNG'
            } else{
                img.src = './img/Capturar8.PNG'
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos que você é do sexo ${genero} e tem ${age} anos `
    }
}