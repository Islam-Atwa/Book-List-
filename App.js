class Book{
//  Book name | المؤلف |  number book 
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// const book1 = new Book ("Atomic Habits", "James Clear", 320);
// console.log(book1);
class UI {
    addBookList(book){
        const list =  document.getElementById("book-list")
    }
}
// When Submting
document.getElementById("book-form").addEventListener("submit", (e)=>{
    const title = document.getElementById("book-title").value;
    const author = document.getElementById("author-name").value;
    const isbn = document.getElementById("isbn-number").value;
    const book = new Book (title, author, isbn);
    const UI = new UI();
})
