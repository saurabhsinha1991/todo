import React from 'react';

const Card = ({ title, description }) => (
    <div className='question' draggable="true" onDragStart={(event) => drag(event)}>
        <h4>{ title }</h4>
        <p>{ description }</p>
    </div>
)

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


export default Card;