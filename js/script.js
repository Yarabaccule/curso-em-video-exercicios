function carregar(){ 
    const horas = document.querySelector('p');
    const img = document.querySelector('#img');
    const body = document.querySelector('body');
    const comp = document.querySelector('h4');
    const data = new Date();
    const hour = data.getHours();

    horas.innerHTML = `Agora são ${hour} horas`;

    if(hour >= 0 && hour <= 12){
        img.src = './img/cfae8-1.jpg'
        body.style.backgroundColor = '#A6754B'
        comp.innerHTML = 'Bom dia'
    } else if ( hour > 12 && hour < 18){
        img.src = './img/cfae8-2.jpg'
        body.style.backgroundColor = '#F2A950'
        comp.innerHTML = 'Boa tarde'
    } else {
        img.src = './img/cfae8-3.jpg'
        body.style.backgroundColor = '#112026'
        comp.innerHTML = 'Boa noite'
    }

}

