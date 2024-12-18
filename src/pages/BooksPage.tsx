// src/pages/BooksPage.tsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BookCard from "../components/BookCard";
import UpdateBookModal from "../components/UpdateBookModal";

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
  ]);
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const handleUpdate = (book: any) => setSelectedBook(book);

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((b) => b.id !== id));
    }
  };

  const handleSave = (updatedBook: any) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setSelectedBook(null);
  };

  return (
    <div>
      <Navbar />
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {selectedBook && (
        <UpdateBookModal
          book={selectedBook}
          onSave={handleSave}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default BooksPage;
