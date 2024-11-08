import React, { useEffect, useState } from 'react';

const MyBooks = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [wishlist, setWishlist] = useState([]);
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    // Fetch user books
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${apiUrl}/user/${storedUser._id}`);
        if (!response.ok) throw new Error('Failed to fetch books');
        
        const data = await response.json();
        if (data && data.books) {
          setWishlist(data.books); // Assuming `books` is an array in the user data
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [apiUrl, storedUser._id]);

  // Function to delete a book
  const deleteBook = async (bookId) => {
    try {
      const response = await fetch(`${apiUrl}/books/${bookId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete book');

      // Update the UI
      setWishlist(prevWishlist => prevWishlist.filter(book => book._id !== bookId));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>My Issued Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Book URL</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishedDate}</td>
              <td>
                <a href={book.bookUrl} target="_blank" rel="noopener noreferrer">View Book</a>
              </td>
              <td>
                <button onClick={() => deleteBook(book._id)}>Return Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBooks;
