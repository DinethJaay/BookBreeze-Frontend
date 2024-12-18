/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { HiPlus, HiLogout } from "react-icons/hi";
import AddBookModal from "../components/AddBookModal";
import BookCard from "../components/BookCard";
import UpdateBookModal from "../components/UpdateBookModal";
import ConfirmModal from "../components/ConfirmModal";
import { useBooks } from "../hooks/useBooks";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const BooksPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [showAddBookModal, setShowAddBookModal] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState<number | null>(null);

  const { books, loading, error, addBook, updateBook, deleteBook } = useBooks();

  const handleAddBook = (newBook: {
    title: string;
    author: string;
    description: string;
  }) => {
    addBook(newBook);
    toast.success("Book added successfully!");
  };

  const handleUpdate = (book: any) => {
    setSelectedBook(book);
  };

  const handleDelete = (id: number) => {
    setBookToDelete(id);
    setIsConfirmModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (bookToDelete !== null) {
      deleteBook(bookToDelete);
      toast.success("Book deleted successfully!");
    }
    setIsConfirmModalOpen(false);
    setBookToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsConfirmModalOpen(false);
    setBookToDelete(null);
  };

  const handleSave = (updatedBook: any) => {
    updateBook(updatedBook);
    toast.success("Book updated successfully!");
    setSelectedBook(null);
  };
  const handleLogout = () => {
    toast.success("Logout successful!");

    navigate("/");
  };

  if (loading) return <div>Loading books...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="p-4 flex justify-between items-center bg-gray-900">
        {/* container with logut and add book buttons*/}
        <div className="flex items-center">
          <button
            onClick={() => setShowAddBookModal(true)}
            className="flex items-center text-blue-500 font-semibold hover:text-blue-700"
          >
            <HiPlus className="mr-2" /> Add Book
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => alert("Log")}
            className="flex items-center text-red-500 font-semibold hover:text-red-700"
          >
            <HiLogout className="mr-2" /> Logout
          </button>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleLogout}
            className="flex items-center text-red-500 font-semibold hover:text-red-700"
          >
            <HiLogout className="mr-2" /> Logout
          </button>
        </div>
      </div>

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

      <AddBookModal
        opened={showAddBookModal}
        onClose={() => setShowAddBookModal(false)}
        onAddBook={handleAddBook}
      />

      {/* Confirm Modal for book deletion */}
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this book?"
      />

      {/* Toast for noti */}
      <ToastContainer />
    </div>
  );
};

export default BooksPage;
