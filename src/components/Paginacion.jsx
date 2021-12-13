import React from 'react';

export default function Paginacion({prev, next, onPrevious, onNext}) {

    const handlePrevius = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return(
        <nav>
            <ul className="pagination justify-content-center mt-5" >
               
                <li className="page-item">
                    <button className="page-link" onClick={ handlePrevius }>Anteior</button>
                </li>

                
                <li className="page-item">
                    <button className="page-link" onClick={ handleNext }>Siguiente</button>
                </li>
            </ul>
        </nav>
    );
}