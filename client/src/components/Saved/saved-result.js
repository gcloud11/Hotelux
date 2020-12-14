import React from 'react';

function resultFavorite (props) {
    const {image, name, address } = props
    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={image} style={{maxWidth: "100px"}} alt="jumbotron"/>
                    <h5 className="card-title" style={{margin: "10px 0"}}>{name}</h5>
                    <p className="card-text" >{address}</p>
                </div>
            </div>
        </div>
    )
}

export default resultFavorite;