import React from 'react';
import './style.css';

function ImageTile(props) {
    return(
        <div className="col s6 m3">
            <div onClick={() => {props.gameClick(props.image)} } className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <img alt="broken" src={props.image} previous-image={props.previousImage}/>
                </div>
            </div>
        </div>
    )
}

export default ImageTile;