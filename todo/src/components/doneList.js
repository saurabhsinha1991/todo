import React, { Component } from 'react';
import Card from './card';

class DoneList extends Component {

  removeItem(type, title) {
      this.props.removeItem({type, title});
  }

  render() {
        return (
            <div className='list-wrapper'>
                <h3>Done List</h3>

                { this.props.cardList.map((eachCard, index)=> (
                  <Card type='done' removeCallback={ this.removeItem.bind(this) } key={index} { ...eachCard } />
                ))}
            </div>
        );
  }
}

export default DoneList;
