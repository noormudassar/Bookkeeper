const books = require("./db.json");
let bookId = 5;

module.exports = {
  getBooks: (req, res) => res.status(200).send(books),
  deleteBook: (req, res) => {
    let index = books.findIndex((element) => element.id === +req.params.id);
    books.splice(index, 1);
    res.status(200).send(books);
  },
  createBook: (req, res) => {
    let { title, author, rating, quote, image } = req.body;
    let newBook = {
      id: bookId,
      title,
      author,
      rating,
      quote,
      image,
    };
    books.push(newBook);
    res.status(200).send(books);
    bookId++;
  },
  updateBook: (req, res) => {
    let { id } = req.params;
    let { type } = req.body;
    let index = books.findIndex((element) => +element.id === +id);

    if (books[index].rating === 10 && type === "plus") {
      books[index].rating = 10;
      res.status(200).send(books);
    } else if (books[index].rating === 1 && type === "minus") {
      books[index].rating = 1;
      res.status(200).send(books);
    } else if (type === "plus") {
      books[index].rating += 1;
      res.status(200).send(books);
    } else if (type === "minus") {
      books[index].rating -= 1;
      res.status(200).send(books);
    } else {
      res.sendStatus(400);
    }
  },
};
