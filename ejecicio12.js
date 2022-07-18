let numero = [{ num1: 3 }, { num1: 1 }, { num3: 10 }];


function estaEntre(num1, num2, num3) {
    return (num1 > num2) && (num1 < num3);

}

let datos = [{ nombre: "maria" }, { apellido: "paredes" }];


function longitudNombreCompleto(nombre, apellido) {
    return length(nombre + apellido + 1)

};
// -------------------------------------------

let shapes = ["triangulo",
    "cuadrado",
    "pentagono",
    "circle"];

function setLastValue(values, newLastValue) {

    let lastIndex = values.length - 1;
    values[lastIndex] = newLastValue;

};

setLastValue(shapes, 'hexagono');

for (let item of shapes) {
    console.log(item)
};

// ------------------------------------------























let registros = [
    { mes: "enero", ganancia: 870 },
    { mes: "febrero", ganancia: 1000 },
    { mes: "marzo", ganancia: 1020 },
    { mes: "abril", ganancia: 2300 },
    { mes: "mayo", ganancia: -10 }
];

function meses(registros) {
    let listaMeses = [];
    for (let balance of registros) {
        add(listaMeses.balance.mes);
    }
    return listaMeses;
}

function afortunados(registros) {
    let listaAfortunados = [];
    for (let bal of registros) {
        if (bal.ganancia > 1000) {
            add(listaAfortunados, bal)
        }
    } return listaAfortunados;
}

function mesesAfortunados(registros) {
    return meses(afortunados(registros))
}


function balancesPositivos(balancesDeUnPeriodo) {
    let balances = [];
    for (let balance of balancesDeUnPeriodo) {
        if (balance.ganacia > 0) {
            agregar(balances, balance);
        }
    }
    return balances;
}