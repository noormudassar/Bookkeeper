const booksContainer = document.querySelector("#books-container");
// const form = document.querySelector("form");
const form = document.querySelector("#book-form");

const baseURL = `http://localhost:5050/api/books`;

const booksCallback = ({ data: books }) => displayBooks(books);
const errorCallback = (error) => console.log(error);

const getAllBooks = () =>
  axios.get(baseURL).then(booksCallback).catch(errorCallback);

const createBook = (body) =>
  axios.post(baseURL, body).then(booksCallback).catch(errorCallback);

const deleteBook = (id) =>
  axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errorCallback);

const updateBook = (id, type) =>
  axios
    .put(`${baseURL}/${id}`, { type })
    .then(booksCallback)
    .catch(errorCallback);

function submitHandler(e) {
  e.preventDefault();

  let title = document.querySelector(`#book-title`);
  let author = document.querySelector(`#book-author`);
  let rating = document.querySelector(`#book-rating`);
  let quote = document.querySelector(`#book-quote`);
  let image = document.querySelector(`#book-image`);

  let bodyObject = {
    title: title.value,
    author: author.value,
    rating: rating.value,
    quote: quote.value,
    image: image.value,
  };

  createBook(bodyObject);

  title.value = "";
  author.value = "";
  rating.value = "";
  quote.value = "";
  image.value = "";
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  bookCard.innerHTML = `<img alt='book cover image' src=${book.image} class="book-cover-image"/>
    <p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <div class="btns-container">
    <button onclick="updateBook(${book.id}, 'minus')">-</button>
    <p class="rating">Rating: ${book.rating}</p>
    <button onclick="updateBook(${book.id}, 'plus')">+</button>
    </div>
    <p class="quote">"${book.quote}"</p>
    <button type="button" class="btn btn-danger"><span class="bi bi-heart red-color" id="like-button"></span></button>
    <button onclick="deleteBook(${book.id})" id="delete-button">delete</button>
    `;

  booksContainer.appendChild(bookCard);
}

function displayBooks(array) {
  booksContainer.innerHTML = ``;
  for (let i = 0; i < array.length; i++) {
    createBookCard(array[i]);
  }
}

form.addEventListener("submit", submitHandler);

getAllBooks();
