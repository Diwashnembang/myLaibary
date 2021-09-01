/* 30 august 2021
 -diwash nembang 
 the odin project*/

function book(title,aurthor,totalPage,status){
    this.title=title;
    this.aurthor=aurthor;
    this.totalPage=totalPage;
    this.status=status;
    this.info=()=>{
        return `${title} by ${aurthor},${totalPage} pages,${status}`
    }
}
  
// book.prototype.remove(){
//   myLaibary.splice
// }

function makecards(){


for (let  book= 0;  book< myLaibary.length; book++) {
  const copiedDom=cardDom.cloneNode(true);
  copiedDom.classList.remove("hidden");
   mainDom.append(copiedDom);
   copiedDom.setAttribute("data-cardNo",`${book}`);
   cardContentLogic(myLaibary[book],copiedDom);
   cardNumber++;
  
}

   const cards=Array.from(document.querySelectorAll(".cardDelet"));
   cards.forEach(card=>{
      card.addEventListener("click",()=>{
        removeCard(card)
      })

    //  console.log(card.parentNode.parentNode.getAttribute("data-cardNo"))
   })
   

  
}

function removeCard(card){
  myLaibary.splice(+card.parentNode.parentNode.getAttribute("data-cardNo"),1);
  clearScreen();
  makecards();
  console.log(myLaibary);
}

function cardContentLogic(book,copiedDom){
  copiedDomChildrens=Array.from(copiedDom.children);
  copiedDomChildrens.forEach(child=>{
       if(child.getAttribute("class")==="top"){

     child.firstChild.textContent=book.title;
    //  console.log()
   }
   if(child.getAttribute("class")==="cardAurthor"){

     child.textContent=book.aurthor;
   
  }
  if(child.getAttribute("class")==="cardTotalPage"){

    child.textContent=book.totalPage;
   
  }

  });

   
 }


function addBook(){
  if(titleDom.value===''||aurthorDom.value===''||totalPage.value===''){return console.log("returned")}
    let newBook=new book(titleDom.value,aurthorDom.value,totalPage.value,completedDom.value);
    myLaibary.push(newBook);
   
  console.table(myLaibary);

  
}


function clearScreen(){
  while(mainDom.firstChild){
    mainDom.removeChild(main.firstChild);
  }
}


function clearAddBookFrom(){
  aurthorDom.value='';
  titleDom.value='';
  totalPageDom.value='';
  completedDom.value='';
}




let myLaibary=[];
let  cardNumber=0;







//general doms 
const mainDom=document.querySelector("#main");
const cardDom=document.querySelector(".card");
const addBookButtonDom=document.querySelector("#info");
const addFormDom=document.querySelector("#addForm")


// doms for adding books
const aurthorDom=document.querySelector("#aurthor");
const titleDom=document.querySelector("#title");
const totalPageDom=document.querySelector("#totalPage");
const completedDom=document.querySelector("#completed");
const submmitButtonDom=document.querySelector("#button");

// card doms
const cardTitleDom=document.querySelector(".cardTitle");
const cardAurthorDom=document.querySelector(".cardAurthor");
const cardTotalPageDom=document.querySelector(".cardTotalPage");
console.log(cardTitleDom);


addBookButtonDom.addEventListener("click",()=>{
  addFormDom.classList.toggle("hidden")
})


submmitButtonDom.addEventListener("click",()=>{
  addBook();
  clearScreen()
  makecards();
  clearAddBookFrom();
})


removeCardDom.addEventListener("click",(e)=>{
  console.log(e)
  console.log("clicked")
})

