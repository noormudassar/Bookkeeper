const quotes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A lifetime of happiness lies ahead of you.",
  "A smooth long journey! Great expectations.",
  "An acquaintance of the past will affect you in the near future.",
  "The harder you work, the luckier you get",
];
const books = require(`./db.json`);
let bookId = 5;

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
    console.log(newBook);
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
  getQuotes: (req, res) => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let randomQuotes = quotes[randomIndex];

    res.status(200).send(randomQuotes);
  },
};
