import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our Library</h2>
          <p className="text-gray-600 mb-6">
            Browse thousands of books, manage your reading list, and much more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded shadow hover:shadow-lg transition bg-gray-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Search Books</h3>
              <p className="text-gray-500">
                Find your favorite books with our search feature.
              </p>
            </div>
            <div className="p-4 border rounded shadow hover:shadow-lg transition bg-gray-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Manage Books</h3>
              <p className="text-gray-500">
                Add, update, or delete books easily in the system.
              </p>
            </div>
            <div className="p-4 border rounded shadow hover:shadow-lg transition bg-gray-300 transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">Borrow & Return</h3>
              <p className="text-gray-500">
                Keep track of borrowed and returned books effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
