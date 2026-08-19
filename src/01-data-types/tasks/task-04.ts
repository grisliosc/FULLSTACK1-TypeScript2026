/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

const books: Book[] = [
  {
    isbn: "0-23-004",
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    totalPages: 356,
    category: "Fiction",
    isAvailable: true
  },

  {
    isbn: "2-34-005",
    title: "Malioboro at Midnight",
    author: "Skyshine",
    totalPages: 225,
    category: "Fiction",
    isAvailable: true
  },

  {
    isbn: "5-45-091",
    title: "Hello, cello!",
    author: "Nadia Ristivani",
    totalPages: 281,
    category: "Fiction",
    isAvailable: false
  }
];

books.forEach((book, index) => {
  console.log(`\nData Buku ke-${index + 1}`);
  console.log(`ISBN          : ${book.isbn}`);
  console.log(`Judul         : ${book.title}`);
  console.log(`Penulis       : ${book.author}`);
  console.log(`Jumlah Halaman: ${book.totalPages}`);
  console.log(`Kategori      : ${book.category}`);
  console.log(`Tersedia      : ${book.isAvailable ? "Ya" : "Tidak"}`);
}); 