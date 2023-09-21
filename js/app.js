//INCLUDES
const muebles = ['mesa','silla','camas','colchones','escritorios'];
let txtMueble = document.getElementById('txtMueble'),
    btnBuscarMueble = document.getElementById('btnBuscarMueble'),
    alertMueble = document.getElementById('alertaMueble');
 
btnBuscarMueble.addEventListener('click', () => {
    const resultMueble = muebles.includes(txtMueble.value);
    if (resultMueble) {
        alertMueble.innerHTML = 'SI existe el mueble';
    } else {
        alertMueble.innerHTML = 'NO existe el mueble';
    }
});

//SOME
const heroes = [{codigo: 1, nombre: 'Zeus', nivelpoder: 50},
                {codigo: 2, nombre: 'Lich', nivelpoder: 45},
                {codigo: 3, nombre: 'Slark', nivelpoder: 80},
                {codigo: 4, nombre: 'Axe', nivelpoder: 96},
                {codigo: 5, nombre: 'Dazzle', nivelpoder: 20}];
let txtNivelPoder = document.getElementById('txtNivelPoder'),
btnBuscarNivelPoder = document.getElementById('btnBuscarNivelPoder'),
alertNivelPoder = document.getElementById('alertNivelPoder');

btnBuscarNivelPoder.addEventListener('click', () => {
    const resultHeroe = heroes.some((heroe) => {
        return heroe.nivelpoder < parseInt(txtNivelPoder.value);
    });
    if (resultHeroe) {
        alertNivelPoder.innerHTML = 'SI existen heroes con ese nivel de poder.!!!';
    } else {
        alertNivelPoder.innerHTML = 'NO existen heroes con ese nivel de poder.!!!';
    }
});

//FINDINDEX
let listadoheroes = document.getElementById('listado-heroes');
heroes.forEach(heroe => {
    let botonseleccionar = document.createElement('button');
    botonseleccionar.textContent = 'Seleccionar';
    botonseleccionar.classList.add('btn','btn-info','form-control','btn-selecc-p3');
    botonseleccionar.setAttribute('id', heroe.codigo);
    let divfooter = document.createElement('div');
    divfooter.classList.add('card-footer');
    divfooter.appendChild(botonseleccionar);
    let divtitulo = document.createElement('div');
    divtitulo.textContent = heroe.nombre;
    divtitulo.classList.add('card-title');
    let card = document.createElement('div');
    card.classList.add('col-12', 'col-lg','card','p-2');
    card.append(divtitulo, divfooter);
    listadoheroes.appendChild(card);
});

let botonseleccionar = document.querySelectorAll(".btn-selecc-p3"),
alertPosicion = document.getElementById('alertPosicion');
botonseleccionar.forEach((item) => {
    item.addEventListener('click', event => {
        let codigo = item.getAttribute("id");
        const posicionHeroe = heroes.findIndex((heroe) => heroe.codigo == codigo);
        alertPosicion.innerHTML = `La posicion del heroe dentro del arreglo es: ${posicionHeroe}`;
    });
});

//FIND
let listadoheroes2 = document.getElementById('listado-heroes2');
heroes.forEach(heroe => {
    let botonseleccionar = document.createElement('button');
    botonseleccionar.textContent = 'Seleccionar';
    botonseleccionar.classList.add('btn','btn-info','form-control','btn-selecc-p4');
    botonseleccionar.setAttribute('id', heroe.codigo);
    let divfooter = document.createElement('div');
    divfooter.classList.add('card-footer');
    divfooter.appendChild(botonseleccionar);
    let divtitulo = document.createElement('div');
    divtitulo.textContent = heroe.nombre;
    divtitulo.classList.add('card-title');
    let card = document.createElement('div');
    card.classList.add('col-12', 'col-lg','card','p-2');
    card.append(divtitulo, divfooter);
    listadoheroes2.appendChild(card);
});

let botonseleccionar2 = document.querySelectorAll(".btn-selecc-p4"),
alertObjeto = document.getElementById('alertObjeto');
botonseleccionar2.forEach((item) => {
    item.addEventListener('click', event => {
        let codigo = item.getAttribute("id");
        const objetoHeroe = heroes.find((heroe) => heroe.codigo == codigo);
        alertObjeto.innerHTML = `La héroe elegido es => codigo: ${objetoHeroe.codigo} | nombre: ${objetoHeroe.nombre} | nivel poder: ${objetoHeroe.nivelpoder}`;
    });
});

//FILTER
let btnBuscarNivelPoder2 = document.getElementById('btnBuscarNivelPoder2'),
    txtNivelPoder2 = document.getElementById('txtNivelPoder2'),
    btnLimpiar = document.getElementById('btnLimpiar');
let contenedorfiltros = document.getElementById('contenedor-heroes-filtrados');
let contenedor_lista = document.getElementById('cont-list');
contenedor_lista.style.display = 'none';

btnBuscarNivelPoder2.addEventListener('click', () => {
    contenedor_lista.style.display = 'block';
    contenedorfiltros.innerHTML = '';
    const heroesFiltrados = heroes.filter((heroe) => {
        return heroe.nivelpoder > parseInt(txtNivelPoder2.value);
    });
    if (heroesFiltrados.length >= 1) {
        heroesFiltrados.forEach(heroe => {
            let parrafoCodigo = document.createElement('p');
            parrafoCodigo.textContent = `Código: ${heroe.codigo}`;
            let parrafoNivelPoder = document.createElement('p');
            parrafoNivelPoder.textContent = `Nivel Poder: ${heroe.nivelpoder}`;
            let divbody = document.createElement('div');
            divbody.classList.add('card-body');
            divbody.append(parrafoCodigo, parrafoNivelPoder);
            let divtitle = document.createElement('div');
            divtitle.textContent = heroe.nombre;
            divtitle.classList.add('card-title', 'border-bottom', 'p-2');
            let card = document.createElement('div');
            card.classList.add('col-12', 'col-lg', 'card');
            card.append(divtitle, divbody);
            contenedorfiltros.appendChild(card);
        });
        return;
    }
    let parrafoNoEncontrado = document.createElement('p');
    parrafoNoEncontrado.textContent = 'No se encontraron heroes.!!!';
    parrafoNoEncontrado.classList.add('text-white', 'm-0');
    contenedorfiltros.appendChild(parrafoNoEncontrado);
});

btnLimpiar.addEventListener('click', () => {
    contenedor_lista.style.display = 'none';
    contenedorfiltros.innerHTML = '';
    txtNivelPoder2.value = '';
    txtNivelPoder2.focus();
});

// const names = ['Diego', 'Jose', 'Pedro', 'Mario'];
// const arrPersons = [
//   { id: 1, name: 'Diego', age: 30 },
//   { id: 2, name: 'Jose', age: 15 },
//   { id: 3, name: 'Pedro', age: 17 },
//   { id: 4, name: 'Mario', age: 27 }
// ];

// // array de strings
// const resultString = names.includes('Jose');
// console.log(resultString);

// // array de objetos(some)
// const resultSome = arrPersons.some((person) => person.age > 18);
// // console.log(resultSome);

// // findIndex
// const idFindIndex = 4;
// const person = arrPersons.findIndex((person) => person.id === idFindIndex);
// // console.log(person);

// // find
// const nameMario = arrPersons.find((person) => person.id === 1);
// // console.log(nameMario);

// // filter
// const mayorEdad = arrPersons.filter((person) => person.age >= 18);
// // console.log(mayorEdad)

// // every
// const isTrueMayorEdad = arrPersons.every((person) => person.age >= 15);
// console.log(isTrueMayorEdad);