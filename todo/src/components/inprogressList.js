import React, { Component } from 'react';
import Card from './card';

class InprogressList extends Component {

  removeItem(type, title) {
    this.props.removeItem({type, title});
  }

  render() {
        return (
            <div className='list-wrapper'>
                <h3>In Progress List</h3>

                { this.props.cardList.map((eachCard, index)=> (
                  <Card type='inprogress' removeCallback={ this.removeItem.bind(this) } key={index} { ...eachCard } />
                ))}
            </div>
        );
  }
}

export default InprogressList;
