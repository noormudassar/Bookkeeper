const books = require(`./db.json`);
let bookId = 0;

module.exports = {
  getBooks: (req, res) => res.status(200).send(books),
  deleteBook: (req, res) => {
    let index = houses.findIndex((element) => element.id === +req.params.id);
    books.splice(index, 1);
    res.status(200).send(books);
  },
};
