let bookList = new Array();
let authorsList = new Array();
let categoriesList = new Array();

let listAuthors = document.getElementById("listAuthors");
let listCategories = document.getElementById("listCategories");
let listBooks = document.getElementById("booksList");

listAuthors.addEventListener("change", chargeByAutors);

// on crée l'ecouteur d'evenements sur le load de notre page
window.addEventListener("DOMContentLoaded", jsonOnload);

//fonction qui appele le chargement du json
function jsonOnload() {
  fetch("books.json")
    .then((response) => {
      return response.json(); // on converti la reponse en json
    })

    .then((data) => {
      // console.log(data);
      createBooks(data);
    });
}

//fonction qui affiche les livres .... mais qui créeera la liste déroulante
function createBooks(_books) {
  //on boucle sur l'ensemble des livres
  for (let book of _books) {
    bookList.push(book);

    for (let x = 0; x < book.authors.length; x++) {
      let author = book.authors[x];
      //je vais verifier que l'auteur n'est pas dans ma liste des auteurs
      if (authorsList.indexOf(author) == -1) {
        authorsList.push(author);
      }
    }
    //je ferais la meme chose pour la liste des categories
  }
  authorsList.sort();
  authorsList.sort();

  for (let i = 0; i < authorsList.length; i++) {
    let option = document.createElement("option");
    option.value = authorsList[i];
    option.innerText = authorsList[i];
    listAuthors.appendChild(option);
  }
}
// fonction appelée lors du chargement d'auteur

function chargeByAutors() {}

function chargeByCategory() {}

function showBooks(_books) {
  document.getElementById("booksList").innerHTML = "";

  for (let y = 0; y < _books.lenght; y++) {
    let book = document.createElement("div");
    book.setAttribute("class", "card");
  }

  for (let x = 0; x < book.authors.length; x++) {
    let author = book.authors[x];

    //je verifie que l'auteur n'est pas dans ma liste des auteurs
    if (authorsList.indexOf(author) == -1) {
      authorsList.push(author);
    }
  }
}
// meme chose pour la liste de categories
bookList.sort();
authorsList.sort();

for (let i = 0; i < authorsList.length; i++) {
  let option = document.createElement("option");
  option.value = authorsList[i];
  option.innerText = authorsList;
  listAuthors.appendChild(option);
}
// console.log(authorsList);
