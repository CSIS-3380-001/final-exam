import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate title and author
        if (!title.trim() || !author.trim()) {
            alert("Title and author can not be empty.");
            return;
        }
        
        const newBook = {
            title: title,
            author: author,
            description: description
        };

        fetch("/api/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            // Do something with the response if needed
            console.log(data);

            // Clear the form
            setTitle("");
            setAuthor("");
            setDescription("");

            // Navigate back to home (if you're using react-router-dom v6)
            // Otherwise, you can use a history push.
            navigate('/');
        })
        .catch(error => {
            console.error("Error:", error);
        });
    };

    return (
        <>
        <div class="CreateBook">
            <div class="container">
                <div class="row">
                <div class="col-md-8 m-auto">
                    <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
                </div>
                <div class="col-md-8 m-auto">
                    <h1 class="display-4 text-center">Add Book</h1>
                    <p class="lead text-center">Create new book</p>
                    <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input
                        type="text"
                        placeholder="Title of the Book"
                        name="title"
                        class="form-control"
                        spellcheck="false"
                        data-ms-editor="true"
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required
                        />
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        placeholder="Author"
                        name="author"
                        class="form-control"
                        spellcheck="false"
                        data-ms-editor="true"
                        id="author" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        required
                        />
                    </div>
                    <div class="form-group">
                        <input
                        type="text"
                        placeholder="Describe this book"
                        name="description"
                        class="form-control"
                        spellcheck="false"
                        data-ms-editor="true"
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <input type="submit" class="btn btn-info btn-block mt-4" />
                    </form>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default AddBook;
