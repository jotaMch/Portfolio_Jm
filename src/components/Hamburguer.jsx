// Hamburguer.jsx
import React from 'react';
import '../styles/burguer.css'

function BurguerCode({ toggleNav, isActive }) {
    return (
        <div>
            <button
                type="button"
                onClick={toggleNav}
                className={`hamburguer ${isActive ? 'active' : ''}`}
                id="btn"
            >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </div>
    );
}

export default BurguerCode;
