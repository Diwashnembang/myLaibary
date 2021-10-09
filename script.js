/* 30 august 2021
 -diwash nembang 
 the odin project*/

function book(title, aurthor, totalPage, status, read) {
  this.title = title;
  this.aurthor = aurthor;
  this.totalPage = totalPage;
  this.status = status;
  this.read = read;
  this.info = () => {
    return `${title} by ${aurthor},${totalPage} pages,${status}`;
  };
}

function changeRead(book, add) {
  if (add) {
    if (book.status >= book.totalPage) return;
    book.status = +book.status + 1;
  } else {
    if (book.status <= 0) return;
    book.status = +book.status - 1;
  }
  clearScreen();
  makecards();
}

function makecards(isFirstLoad,LocalStoragelaibary) {
  let noOfBook;
  // if(isFirstLoad && LocalStoragelaibary){
  //   noOfBook= LocalStoragelaibary.length
  // }else{
    noOfBook=myLaibary.length;
  // }
  for (let book = 0; book < noOfBook; book++) {
    const copiedDom = cardDom.cloneNode(true);
    copiedDom.classList.remove("hidden");
    mainDom.append(copiedDom);
    copiedDom.setAttribute("data-cardNo", `${book}`);
    cardContentLogic(myLaibary[book], copiedDom);
    cardNumber++;
  }

  const cards = Array.from(document.querySelectorAll(".cardDelet"));
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      removeCard(card);
    });

    //  console.log(card.parentNode.parentNode.getAttribute("data-cardNo"))
  });
}

function removeCard(card) {
  myLaibary.splice(+card.parentNode.parentNode.getAttribute("data-cardNo"), 1);
  clearScreen();
  makecards();
  setLocalStorage();
}

function cardContentLogic(book, copiedDom) {
  copiedDomChildrens = Array.from(copiedDom.children);
  copiedDomChildrens.forEach((child) => {
    if (child.getAttribute("class") === "cardAurthor") {
      child.textContent = `By-${book.aurthor.toUpperCase()}`;
    }
    if (child.getAttribute("class") === "top") {
      child.firstElementChild.textContent = book.title.toUpperCase(); //this is #titile
      //  console.log()
    }
    if (child.getAttribute("class") === "cardTotalPage") {
      child.textContent = `Pages: ${book.totalPage}`;
    }

    if (child.getAttribute("class") === "cardTotalRead") {
      child.textContent = `Completed: ${book.status}`;
    }
    if (child.getAttribute("class") === "cardEditSection") {
      let numberInput =
        child.firstElementChild.nextElementSibling.nextElementSibling;
      let add = child.firstElementChild.nextElementSibling;
      let minus =
        child.firstElementChild.nextElementSibling.nextElementSibling
          .nextElementSibling;

      numberInput.value = book.status;

      numberInput.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        if (numberInput.value <= 0) numberInput.value = 0;
        if (numberInput.value >= book.totalPage)
          numberInput.value = book.totalPage;
        book.status = numberInput.value;
        clearScreen();
        makecards();
      });

      add.addEventListener("click", () => {
        changeRead(book, true);
      });
      minus.addEventListener("click", () => {
        changeRead(book, false);
      });
    }
  });
}


function addBook(e) {
  if (totalPageDom.value === "" || completedDom.value === "") return;

  if (totalPageDom.value < completedDom.value) {
    e.preventDefault();

    return alert(errorMessage.moreCompletedPage);
  }

  if (completedDom.value < 0) {
    e.preventDefault();

    return alert(errorMessage.negativeCompletedPage);
  }

  let newBook = new book(
    titleDom.value,
    aurthorDom.value,
    totalPageDom.value,
    completedDom.value
  );
  myLaibary.push(newBook);

  clearAddBookFrom();
  clearScreen();
  makecards();
  setLocalStorage();

}

function clearScreen() {
  while (mainDom.firstChild) {
    mainDom.removeChild(main.firstChild);
  }
}

function clearAddBookFrom() {
  aurthorDom.value = "";
  titleDom.value = "";
  totalPageDom.value = "";
  completedDom.value = "";
}


function setLocalStorage(){
  console.table(myLaibary)
  let books=JSON.stringify(myLaibary)
  localStorage.setItem("laibary",`${books}`);
  console.log(localStorage)

}

function getLocalStorage() {
  let laibary=JSON.parse(localStorage.getItem('laibary'))
  return laibary

}

let myLaibary = [];
let cardNumber = 0;
let errorMessage = {
  moreCompletedPage: "Completed Page Can't Be More Than Total Page",
  negativeCompletedPage: "Completed Page can't be Negative",
};

//general doms
const mainDom = document.querySelector("#main");
const cardDom = document.querySelector(".card");
const addBookButtonDom = document.querySelector("#info");
const addFormDom = document.querySelector("#addForm");

// doms for adding books
const aurthorDom = document.querySelector("#aurthor");
const titleDom = document.querySelector("#title");
const totalPageDom = document.querySelector("#totalPage");
const completedDom = document.querySelector("#completed");
const submmitButtonDom = document.querySelector("#button");

// card doms
const addDom = document.querySelector(".add");
const minusDom = document.querySelector(".minus");

// read slider dom

addBookButtonDom.addEventListener("click", () => {
  addFormDom.classList.toggle("hidden");
});

submmitButtonDom.addEventListener("click", (e) => {
  addBook(e);
});

let storedBooks=getLocalStorage();
storedBooks.forEach(storedBook => {
  myLaibary.push(storedBook);
});
console.log(myLaibary)
makecards();