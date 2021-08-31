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
  


function makecards(){
  console.log(myLaibary.length);
  if(myLaibary.length===0) return;
  if(myLaibary.length!==0){
    cardDom.classList.remove("hidden");
  }


 for (let i = 0; i < myLaibary.length; i++) {
  const copiedDom=cardDom.cloneNode(true);
  copiedDom.classList.remove("hidden");
   copiedDom.setAttribute("data",`${i}`)
   main.append(copiedDom);
   
 }
  
}

function addBook(){
  if(titleDom.value===undefined||aurthorDom.value===undefined||totalPage.value===undefined){return console.log("returned")}
    let newBook=new book(titleDom.value,aurthorDom.value,totalPage.value,completedDom.value);
    myLaibary.push(newBook);
  console.table(myLaibary);
  
}


function clearScreen(){
  while(mainDom.firstChild){
    mainDom.removeChild(main.firstChild);
  }
}

myLaibary=[];

// const titleDom=document.querySelector(".title");


//general doms 
const mainDom=document.querySelector("#main");
const cardDom=document.querySelector(".card");
// const copiedDom=cardDom.cloneNode(true);
// copiedDom.classList.remove("hidden");
const addBookButtonDom=document.querySelector("#info");
const addFormDom=document.querySelector("#addForm")


// doms for adding books
const aurthorDom=document.querySelector("#aurthor");
const titleDom=document.querySelector("#title");
const totalPageDom=document.querySelector("#totalPage");
const completedDom=document.querySelector("#completed");
const submmitButtonDom=document.querySelector("#button");


console.log(completedDom)

addBookButtonDom.addEventListener("click",()=>{
  addFormDom.classList.toggle("hidden")
})


submmitButtonDom.addEventListener("click",()=>{
  addBook();
  clearScreen()
  makecards();
})

// makecards()

// const myBook=addBook("my","me","100","read");
// const myBook1=addBook("my","me","100","read");
// myLaibary.push(myBook);
// myLaibary.push(myBook1);
// makecards()
// console.log(myLaibary)

