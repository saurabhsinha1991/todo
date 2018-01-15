import React, { Component } from 'react';
import Card from './card';

class DoneList extends Component {
  render() {
        return (
            <div className='list-wrapper'>
                <h3>Done List</h3>

                { this.props.cardList.map((eachCard, index)=> (
                  <Card key={index} { ...eachCard } />
                ))}
            </div>
        );
  }
}

export default DoneList;
