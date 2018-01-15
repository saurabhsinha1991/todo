import React, { Component } from 'react';
import Card from './card';

class TodoList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isFieldOpen: false
      }

      this.toggleForm = this.toggleForm.bind(this);
      this.addItem = this.addItem.bind(this);
      
  }

  toggleForm(bool) {
      this.setState({
          isFieldOpen: bool
      });
  }

  addItem(e) {
      e.preventDefault();
      if ( this.title &&  this.description ) {
          this.props.addItem({
              title: this.title.value,
              description: this.description.value
          });
      }
  }

  removeItem(type, title) {
        this.props.removeItem({type, title});
  }

  render() {
        return (
            <div className='list-wrapper' onDrop={(e) => this.ondragover(e)}>
                <h3>To Do List</h3>

                { this.props.cardList.map((eachCard, index)=> (
                  <Card type='todo' removeCallback={ this.removeItem.bind(this) } key={index} { ...eachCard } />
                ))}
                
                { (this.state.isFieldOpen) ?
                    <form>
                        <div>
                            <label>Enter Title</label>
                            <input type='text' ref={(elem) => this.title = elem} required />
                        </div>
                        <div>
                            <label>Enter Description</label>
                            <input type='text' ref={(elem) => this.description = elem} required />
                        </div>
                        <button type="submit" onClick={(e) => this.addItem(e) }>Add Item</button>
                    </form>
                    :
                    // eslint-disable-next-line
                    <a href='javascript:void(0);' onClick={() => this.toggleForm(true) }>Add Item</a>

                }
            </div>
        );
  }
}

export default TodoList;
