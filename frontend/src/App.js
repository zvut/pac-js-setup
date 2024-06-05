// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Message from Backend:</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
