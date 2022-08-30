let library = [];

//Constructor function
function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

//Element Targets
const title = document.querySelector('.title');
const pages = document.querySelector('.pages');
const submit = document.querySelector('.submit');
const author = document.querySelector('.author');
const readed = document.querySelector('.readed');
const tableBody = document.querySelector('.tableBody')
const form = document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      addBookToLibrary();
      clearInput();
})

//Object creator
function addBookToLibrary() {
  if (title.value.length === 0 || author.value.length === 0 || pages.value.length === 0) {
    alert("Please, fill all the fields");
    return;
  }

  const newBook = new Book(title.value, author.value, pages.value, readed.value);

  library.push(newBook);
  bookCreate();
}

//Element creator based in input data
function bookCreate() {
  tableBody.innerHTML = "";
  library.forEach((newBook, index) => {
    const htmlBook = `
      <div class="tr">
        <tr>
          <div class="infoContainer">
            <div class="titleContainer">
              <td>
              <p class="tdHeader">Title</p>
              <p class="td">${newBook.title}</p>
              </td>
            </div>
            <div class="authorContainer">
              <td>
              <p class="tdHeader">Author</p>
              <p class="td">${newBook.author}</p>
              </td>
            </div>
            <div class="pagesContainer">
              <td>
              <p class="tdHeader">Pages</p>
              <p class="td">${newBook.pages}</p>
              </td>
            </div>
          </div>
          <div class="statusContainer">
            <td><button class="statusButton">${newBook.readed}</button></td>
            <td><button id=${index} class="deleter" onclick="remove(this)">delete</button></td>
          </div>
        </tr>
      </div>
      `;
    tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}

function clearInput () {
  title.value = "";
  author.value = "";
  pages.value = "";
}

function remove(index) {
    console.log(index)
    index.remove()
}