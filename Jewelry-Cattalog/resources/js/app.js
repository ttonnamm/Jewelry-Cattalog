import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';

// Example Component
function App() {
    return <h1>Hello, React in Laravel with Sail!</h1>;
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
