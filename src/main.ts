import "./style.css";

const estiloNombre= "font-size:24px; background-color:green; font-style:bold";

interface Grupo{
    nombre: string;
    año: number;
    activo: boolean;
    genero: string;
}

const grupo1: Grupo ={
    nombre: "The Beatles",
    año: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
}

console.log("%c The Beatles" ,estiloNombre, grupo1);

const grupo2: Grupo ={
    nombre: "Queen",
    año: 1970,
    activo: false,
    genero: "🎸 Rock"
}
console.log("%c Queen" ,estiloNombre, grupo2);

const grupo3: Grupo ={
    nombre: "AC DC",
    año: 1973,
    activo: true,
    genero: "🤘 Hard Rock"
}

console.log("%c AC DC" ,estiloNombre, grupo3);

const grupo4: Grupo ={
    nombre: "Ludwig van Beethoven",
    año: 1770,
    activo: false,
    genero: "🎼 Clásica"
}

console.log("%c Ludwig van Beethoven" ,estiloNombre, grupo4);


const grupo5: Grupo ={
    nombre: "The Rolling Stones",
    año: 1962,
    activo: true,
    genero: "🎸 Rock"
}

console.log("%c The Rolling Stones" ,estiloNombre, grupo5);

