import React, { useState } from "react";

interface Props {
  book: { id: number; title: string; author: string; description: string };
  onSave: (updatedBook: {
    id: number;
    title: string;
    author: string;
    description: string;
  }) => void;
  onClose: () => void;
}

const UpdateBookModal: React.FC<Props> = ({ book, onSave, onClose }) => {
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !author || !description) {
      setError("All fields are required.");
      return;
    }

    // If all fields are valid, pass updated data
    onSave({ id: book.id, title, author, description });
    setError("");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 font-bold">Update Book</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBookModal;
