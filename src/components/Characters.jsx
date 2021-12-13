import React from 'react';

export default function Characters({ characters = []}) {
    return (
        <div className='container mt-4'>
            <div className="row">
                {characters.map((item, index) => (

                    <div key={index} className="col">

                        <div className="card m-2" style={{minWidth: "200px"}}>
                            <img src={item.image} alt="" style={{maxWidth: "360px", alignItems: "center" }}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <hr/>
                                <p className="card-text"><strong>Especie: </strong>{item.species}</p>
                                <p className="card-text"><strong>Locacion: </strong> {item.location.name}</p>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
}