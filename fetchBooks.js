const books = require("google-books-search");
let bookRows = [];
books.search("spider man", function (error, results) {
  if (!error) {        
    results.forEach(result => {
      let bookInfo = {};
      bookInfo.id = result.id;
      bookInfo.title = result.title;
      bookInfo.category = result.categories + "";
      bookInfo.author = result.authors + "";
      bookInfo.publisher = result.publisher;
      bookInfo.publishedDate = result.publishedDate;
      bookInfo.imageLink = result.thumbnail;
      bookInfo.description = result.description;
      bookInfo.infoLink = result.link;

      // let bookRow = <Book key={bookInfo.id} bookInfo={bookInfo} />
      bookRows.push(bookInfo);
    });
  } else {
    console.log(error);
  }
  console.log(bookRows);
});