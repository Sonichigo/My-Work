import React from 'react';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { id, name, sprite, type, ability1, ability } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <h4 className="data-char">Type: {type}</h4>
        <br/>
        <h3>MOVESETS</h3>
        <h4 className="data-char">Move: {ability1}</h4>
        <h4 className="data-char">Move: {ability}</h4>
      </div>
    </section>
  )
}

export default DetailView;