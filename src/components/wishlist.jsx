import React, { useEffect, useState } from 'react';
import WishBooks from './wishlist-books';
import { ToastContainer, toast } from 'react-toastify';

const Wishlist = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [wishlist, setWishlist] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const [issuerName, setIssuerName] = useState(storedUser?.name || '');
  const [issuerEmail, setIssuerEmail] = useState(storedUser?.email || '');

  useEffect(() => {
    // Retrieve wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const handleSelectBook = (book) => {
    // Toggle selection of books
    if (selectedBooks.includes(book)) {
      setSelectedBooks(selectedBooks.filter((b) => b !== book));
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleIssue = async () => {
    if (!issuerName || !issuerEmail) {
      alert("Please fill in all fields.");
      return;
    }

    // Create the payload
    let books= selectedBooks.map((book) => ({
        title: book.title,
        author: book.author,
        publishedDate: book.publishedDate, // fixed typo
        bookUrl: book.bookUrl
    }))
    const payload = {
        bookIssued:books
    };

    try {
      // Send data to the backend
      const response = await fetch(`${apiUrl}/user/${storedUser?.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Handle the response
      if (response.ok) {
        const data = await response.json();
        console.log("Books issued successfully:", data);

        // Optionally clear the form and close the modal
        setIssuerName('');
        setIssuerEmail('');
        setSelectedBooks([]);
        setIsModalOpen(false);
        toast.success("Books have been issued successfully.");
      } else {
        const errorData = await response.json();
        toast.error(`Failed to issue books: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error issuing books:", error);
      toast.error("An error occurred while issuing books. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-12 h-screen p-5 bg-gray-100 gap-6">
      {/* Wishlist Container */}
      <div className="col-span-2 flex flex-col w-full bg-white p-4 shadow-md rounded-lg overflow-y-scroll">
        <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
        <div className="flex flex-col items-center mt-3">
          {wishlist.length > 0 ? (
            wishlist.map((book, index) => (
              <WishBooks
                key={index}
                {...book}
                handleSelectBook={handleSelectBook}
                selectedBooks={selectedBooks}
                book={book}
              />
            ))
          ) : (
            <p className="text-gray-500">No items in your wishlist.</p>
          )}
        </div>
      </div>

      {/* Selected Books Container */}
      <div className="col-span-10 flex flex-col w-full bg-white p-4 shadow-md rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Books to Issue</h2>
          {selectedBooks.length > 0 && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Issue Selected Books
            </button>
          )}
        </div>
        {selectedBooks.length > 0 ? (
          selectedBooks.map((book, index) => (
            <div
              key={index}
              className="p-3 mb-2 rounded-lg bg-amber-600 shadow-md transition-all duration-200"
            >
              <p className="text-lg font-medium text-white">{book.title}</p>
              <p className="text-sm text-gray-300">{book.author}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No books selected for issuing.</p>
        )}
      </div>

      {/* Modal for Issuing */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-semibold mb-4">Issue Books</h2>

            <label className="block mb-2 text-sm font-medium text-gray-700">Issuer Name</label>
            <input
              type="text"
              value={issuerName}
              onChange={(e) => setIssuerName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your name"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Issuer Email</label>
            <input
              type="email"
              value={issuerEmail}
              onChange={(e) => setIssuerEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your email"
            />

            <h3 className="text-md font-medium mt-4 mb-2">Books to be Issued:</h3>
            <ul className="list-disc list-inside mb-4">
              {selectedBooks.map((book, index) => (
                <li key={index} className="text-gray-700">
                  {book.title} by {book.author}
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleIssue}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
              >
                Confirm Issue
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Wishlist;
