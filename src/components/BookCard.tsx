// src/components/BookCard.tsx
import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface Props {
  book: Book;
  onUpdate: (book: Book) => void;
  onDelete: (id: number) => void;
}

const BookCard: React.FC<Props> = ({ book, onUpdate, onDelete }) => {
  return (
    <div className="border rounded p-4 shadow-lg">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">Author: {book.author}</p>
      <div className="mt-4">
        <button
          onClick={() => onUpdate(book)}
          className="mr-2 px-4 py-1 bg-yellow-500 text-white rounded"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="px-4 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
