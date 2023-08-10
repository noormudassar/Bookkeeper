const books = require(`./db.json`);
let bookId = 0;

module.exports = {
  getBooks: (req, res) => res.status(200).send(books),
  deleteBook: (req, res) => {
    let index = books.findIndex((element) => element.id === +req.params.id);
    books.splice(index, 1);
    res.status(200).send(books);
  },
  createBook: (req, res) => {
    let { title, author, rating, image } = req.body;
    let newBook = {
      id: bookId,
      title,
      author,
      rating,
      image,
    };
    books.push(newBook);
    res.status(200).send(books);
    bookId++;
  },
};
