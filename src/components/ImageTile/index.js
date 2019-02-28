import React from 'react';

function ImageTile(props) {
    return(
        <div className="col s6 m2">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">Name</span>
                    <img alt="" src={props.image}/>
                </div>
            </div>
        </div>
    )
}

export default ImageTile;