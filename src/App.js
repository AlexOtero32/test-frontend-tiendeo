import React from 'react';

import Card from './components/Card';

function App() {
    return (
        <div className="app">
            <div className="container grid-container">
                <Card
                    titulo="Esto es una tarjeta"
                    descripcion="lorem ipsum dolor sit amet"
                />
                <Card
                    titulo="Esto es una tarjeta"
                    descripcion="lorem ipsum dolor sit amet"
                />
                <Card
                    titulo="Esto es una tarjeta"
                    descripcion="lorem ipsum dolor sit amet"
                />
                <Card
                    titulo="Esto es una tarjeta"
                    descripcion="lorem ipsum dolor sit amet"
                />
                <Card
                    titulo="Esto es una tarjeta"
                    descripcion="lorem ipsum dolor sit amet"
                />
            </div>
        </div>
    );
}

export default App;
