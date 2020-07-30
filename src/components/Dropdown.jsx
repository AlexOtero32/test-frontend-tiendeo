import React from 'react';

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-item">Más recientes</button>
            <button className="dropdown-item">Más antiguos</button>
            <button className="dropdown-item">A-Z</button>
            <button className="dropdown-item">Z-A</button>
        </div>
    );
};

export default Dropdown;
