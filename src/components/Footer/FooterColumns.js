import React from 'react';
import './Footer.css';


export default function FooterColumns({ value }) {
    return (
        <div>
            <ul className="moviesByGenre">
                {value.map((value, index) => <li key={index}>{value}
                    <span>|</span>
                </li>)}
            </ul>
        </div>
    )
}
