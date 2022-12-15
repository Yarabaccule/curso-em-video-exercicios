    const verContagem = document.querySelector('#verContagem');
    verContagem.addEventListener('click', verCont)

    function verCont() {
        const inicio = document.querySelector('#inicio');
        const fim = document.querySelector('#fim');
        const passo = document.querySelector('#passo');
        const resContar = document.querySelector('.resContar')
        const n = 1;

        if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
            resContar.style.color = 'red';
            resContar.innerHTML = '[ERRO] Faltam dados!'
        } else{
            resContar.innerHTML = 'Contando: ';
            const i = Number(inicio.value);
            const f = Number(fim.value);
            const p = Number(passo.value);
            
            if(p <= 0){
                resContar.innerHTML = "Passo invalido"
            }

            if(i < f){
                for(let c = i; c <= f; c+= p){
                    resContar.innerHTML += `${c} \u{1F44C} `;
                }
            }else{
                for(let c = i; c >= f; c-= p){
                    resContar.innerHTML += `${c} \u{1F44C} `;
                }
                resContar.innerHTML += `\u{1F3C1}`
            }
            resContar.innerHTML += `\u{1F3C1}`
        }
    }