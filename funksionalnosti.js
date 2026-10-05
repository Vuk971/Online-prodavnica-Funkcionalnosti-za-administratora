'use strict'

class Artikal {
    constructor(naziv, cena, opis) {
        this.naziv = naziv;
        this.cena = cena;
        this.opis = opis;
    }
}

const listaArtikala = [
    new Artikal("Monitor", 165, "Full HD IPS monitor"),
    new Artikal("TV", 650, "4K Smart TV 55 inča"),
    new Artikal("Miš", 20, "Ergonomski bežični miš")
];

function prikaziArtikleUTabeli() {
    const tbody = document.getElementById("telo-tabele");
    tbody.innerHTML = "";
    listaArtikala.forEach((artikal, indeks) => {
        const red = document.createElement("tr");
        red.innerHTML = `
            <td>${indeks + 1}</td>
            <td>${artikal.naziv}</td>
            <td>${artikal.cena}</td>
        `;
        tbody.appendChild(red);
    });
}
window.addEventListener("DOMContentLoaded", prikaziArtikleUTabeli);
