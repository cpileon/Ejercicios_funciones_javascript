//Definir las variables globales
let colorFondoCaja;
let box1 = document.querySelector('#box-1');
let box2 = document.querySelector('#box-2');
let box3 = document.querySelector('#box-3');
let box4 = document.querySelector('#box-4');

// Función para retornar color según la letra que se presione
function defineColorBox(event) {

    if (event.key === 'a' || event.key === 'A') {
        colorFondoCaja = 'black';
        document.querySelector('#warning').innerHTML = '';
    } else if (event.key === 's' || event.key === 'S') {
        colorFondoCaja = 'red';
        document.querySelector('#warning').innerHTML = '';
    } else if (event.key === 'd' || event.key === 'D'){
        colorFondoCaja = 'gray';
        document.querySelector('#warning').innerHTML = '';
    }else{
        document.querySelector('#warning').innerHTML = 'Por favor presiona a, s o d para seleccionar un color.';
    }


    let circulo = document.querySelector('#previewColor');
    circulo.style.backgroundColor = colorFondoCaja;

    return colorFondoCaja;
}

//Función que recibe el color retornado para pintar la caja a la que se haga click
function pintar(color, caja){
    caja.style.backgroundColor = color;
}

//Eventos para puntar las cajas
box1.addEventListener('click', () => pintar(colorFondoCaja, box1));
box2.addEventListener('click', () => pintar(colorFondoCaja, box2));
box3.addEventListener('click', () => pintar(colorFondoCaja, box3));
box4.addEventListener('click', () => pintar(colorFondoCaja, box4));


document.addEventListener('keydown', defineColorBox)
