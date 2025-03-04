// client/src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Service Worker registration for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/serviceworker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// This will ensure your PWA can cache assets and work offline! 🚀 Let me know if you want to tweak anything else.
