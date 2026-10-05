'use strict'

class Article {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }
}

function createArticleRows(articles) {
    let table = document.querySelector("#articles-body");
    table.innerHTML=''
    for (let i = 0; i < articles.length; i++) {
        let tr = document.createElement("tr");

        let rb = document.createElement("td");
        let name = document.createElement("td");
        let price = document.createElement("td");

        rb.textContent = i + 1;
        name.textContent = articles[i].name;
        price.textContent = articles[i].price;

        tr.appendChild(rb);
        tr.appendChild(name);
        tr.appendChild(price);

        tr.addEventListener('click', function() {
    displayArticleDetails(articles[i])
})
        table.appendChild(tr);
    }
}
function displayArticleDetails(article) {
    let p = document.createElement("p")

    p.innerHTML = "Naziv: " + article.name + "<br>" + "Cena: " + article.price + "<br>" + "Opis: " + article.description

    let articleDetails = document.querySelector("#articleDetails")

    if (articleDetails.firstChild) {
        articleDetails.firstChild.remove()
    }

    articleDetails.appendChild(p)
}

function handleFormSubmission(articles) {

    let submitBtn = document.querySelector("#submitBtn")

    submitBtn.addEventListener('click', function() {
        const form = document.querySelector("#form")
        const formData = new FormData(form)

        const name = formData.get("name")
        const price = formData.get("price")
        const description = formData.get("description")

        for (let i = 0; i < articles.length; i++) {
    if(name === articles[i].name) {
        return
    }
    }
        const newArticle = new Article(name, price, description)
        articles.push(newArticle)
        createArticleRows(articles)
    })
}

function initializeArticles() {
    let articles = [
        new Article("Laptop", 800, "A fast laptop with a large screen."),
        new Article("Phone", 300, "A smart phone with a good camera."),
        new Article("Headphones", 50, "Wireless headphones with long battery life.")
    ];

    createArticleRows(articles)
    handleFormSubmission(articles)
}

document.addEventListener('DOMContentLoaded', initializeArticles);