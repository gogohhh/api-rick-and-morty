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
                { prev ? 
                <li className="page-item">
                    <button className="page-link" onClick={ handlePrevius }>Anteior</button>
                </li> : null
                }

                
                <li className="page-item">
                    <button className="page-link" onClick={ handleNext }>Siguiente</button>
                </li>
            </ul>
        </nav>
    );
}