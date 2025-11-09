import { useEffect, useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

interface ApiResponse {
    message: string;
}

function App() {
    const [count, setCount] = useState(0);
    const [apiMessage, setApiMessage] = useState<string>('Loading...');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        fetch(`${apiUrl}/`)
            .then((res) => res.json())
            .then((data: ApiResponse) => setApiMessage(data.message))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Otasku</h1>
            <div className="card">
                <h2>React + TypeScript Frontend</h2>
                <p>Backend API: {error ? `Error: ${error}` : apiMessage}</p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className="read-the-docs">
                Full-stack application with React + TypeScript + Node.js
            </p>
        </>
    );
}

export default App;
