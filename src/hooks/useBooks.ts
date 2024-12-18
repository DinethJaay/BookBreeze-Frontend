/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5164/api/books";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all books
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks(response.data);
    } catch (err) {
      setError("Error fetching books");
    } finally {
      setLoading(false);
    }
  };

  // Add a new book
  const addBook = async (newBook: Omit<Book, "id">) => {
    try {
      const response = await axios.post(API_URL, newBook, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks((prevBooks) => [...prevBooks, response.data]);
    } catch (err) {
      setError("Error adding book");
    }
  };

  // Update a book
  const updateBook = async (updatedBook: Book) => {
    try {
      await axios.put(`${API_URL}/${updatedBook.id}`, updatedBook, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        )
      );
    } catch (err) {
      setError("Error updating book");
    }
  };

  // Delete a book
  const deleteBook = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (err) {
      setError("Error deleting book");
    }
  };

  // get all books when books component works
  useEffect(() => {
    fetchBooks();
  }, []);

  return {
    books,
    loading,
    error,
    addBook,
    updateBook,
    deleteBook,
  };
};
