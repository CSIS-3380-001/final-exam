import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    
        fetch("/api/") 
          .then(res => res.json())
          .then(data => {
            setBooks(data);
          })
          .catch(error => {
            console.log(error);
            console.error("Error fetching the books:", error);
          });
      }, []);
    
      const handleDeleteBook = (bookId) => {
        
        fetch(`/api/${bookId}`, {
          method: 'DELETE',
        })
          .then(res => {
            if (res.ok) {
              
              setBooks(prevBooks => prevBooks.filter(book => book._id !== bookId));
            } else {
              console.error("Error deleting the book.");
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });
      };

      return (
        <>
        <div className="BookList">
            <div className="col-md-12">
                <br />
                <h2 className="display-4 text-center">Books List</h2>
            </div>
            <div className="col-md-11">
                <a className="btn btn-info float-right" href="/create-book"
                >+ Add New Book!</a
                ><br /><br />
                <hr />
            </div>
            {/* Your main app content */}
            {/* <Link to="/add" className="btn btn-info float-right">Add New Book</Link> */}
            <div className="list">
                {books.map(book => (
                    <BookCard key={book._id} book={book} deleteBook={() => handleDeleteBook(book._id)} />
                ))}
            </div>
        </div>
        </>
      );

}

export default Home;