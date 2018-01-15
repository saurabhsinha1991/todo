import React, { Component } from 'react';
import Card from './card';

class InprogressList extends Component {
  render() {
        return (
            <div className='list-wrapper'>
                <h3>In Progress List</h3>

                { this.props.cardList.map((eachCard, index)=> (
                  <Card key={index} { ...eachCard } />
                ))}
            </div>
        );
  }
}

export default InprogressList;
