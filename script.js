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
  // if(myLaibary.length!==0){
  //   cardDom.classList.remove("hidden");
  // }


myLaibary.forEach(book => {
  const copiedDom=cardDom.cloneNode(true);
  copiedDom.classList.remove("hidden");
   main.append(copiedDom);
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

    })

  //  while(copiedDom.children){
  //    if(copiedDom.children.getAttribute("class")==="cardTitle"){

  //      copiedDom.children.textContent=book.title;
  //    }
  //    if(copiedDom.children.getAttribute("class")==="cardAurthor"){

  //      copiedDom.children.textContent=book.aurthor;
     
  //   }
  //   if(copiedDom.children.getAttribute("class")==="cardTotalpage"){

  //     copiedDom.children.textContent=book.totalPage;
     
  //   }

    console.table(copiedDomChildrens)
     
   }

);

  
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


