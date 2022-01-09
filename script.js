// ekta book add korbo 
// 1. book object banabo jar 3 proprties:1)Title, 2)Author, 3) ISBN 
// 2.book object er title property er value pabo title input er value theke 
// 3.author propery er value pabo author input er value er theke 
// 4.ISBN property er value pabo ISBN input er value er theke 
// 5.then book object ta create korbo 
// 6.object ta listOfBook variable e append korbo 
var bookTitle = document.getElementById("title").value;
console.log(bookTitle)

function CreateBook(title, author, isbn){
    this.Title = title;
    this.Author = author;
    this.ISBN = isbn

}


// function = submit button ta click korle ekta book add hobe list e and browser e show korbe 
// step1:submit button click korle, ekta book object create hobe 
// step2:oi object ta brouser e table list e add hobe and ekta id generate hobe 
// step3:book object er id ta hobe No 
// step4:ekta "X" icon add hobe 
let listOfBook = []
function addBookToList(e){
        // value submit korar age pacchi na
    // get values from input 
    e.preventDefault();
    console.log(`value of e ${e}`);
    
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let bookIsbn = document.getElementById("isbn").value;

    let book = new CreateBook(bookTitle, bookAuthor, bookIsbn)
    listOfBook.push(book)
    console.log(bookTitle)
    console.log(listOfBook)
    showBookOnBrowser(book)

}

// function = show the book in brouser 
function showBookOnBrowser(book){
    var tableRow = document.createElement("tr");
    var id = createANode(listOfBook.indexOf(book), tableRow);
    var bookTitle = createANode(book.Title, tableRow);
    var bookAuthor = createANode(book.Author, tableRow);
    var bookISBN = createANode(book.ISBN, tableRow);
    var icon = `<i onclick = "12" id = ${listOfBook.indexOf(book)} class="fa fa-times-circle"></i>`;
    console.log(icon)
    // icon.addEventListener("click", removeABook());
    console.log(listOfBook.indexOf(book));
    // icon.setAttribute("id", `${listOfBook.indexOf(book)}`);
    // icon.id = listOfBook.indexOf(book);
    
    console.log(icon.id)
    var crossBar = createANode(icon, tableRow);
    document.querySelector("tbody").appendChild(tableRow);
}

// function = make a "th" tag add value and append to parent 
function createANode(value, parent){
    let node = document.createElement("th");
    node.innerHTML = value;
    parent.appendChild(node);
}
// function = remove a book when click the cross icon 
// step1:cross button er sathe remove function add korte hobe 
// step2:remove the book
// document.getElementById().addEventListener("click", removeBook)

// function = removeBook
// step1:x e click korle tar id ta nibo 
// step2:oi id er value and listOfBook e oi book er index same so oi index er element delete korbo 
// step3:listOfBook abar reload kore browser e show korbo

function removeABook(){
    
    console.log("removeABook function is called");
    var bookID = document.querySelector(this).getAttribute("id");
}
