import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';
import InprogressList from './components/inprogressList';
import DoneList from './components/doneList';
import { bindActionCreators } from 'redux';
import { getTrelloDetails, addTodoList, removeItem } from './actions/trelloActions';

class App extends Component {

    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/vgkil').then( (response) => {
          return response.json();
      }).then( (details) => {
          this.props.actions.getTrelloDetails(details.data);
      });
  }

  removeItem(obj) {
      this.props.actions.removeCard(obj);
  }

  updateItem(data, type, types) {
      const { item } = data;
      let updateItem;
      if(types.length) {
        updateItem = JSON.parse(item[types[0]] ? item[types[0]] : item[types[1]]);
        updateItem.addType = type;
      }
      else {
        updateItem = {item: data, addType: type};
      }
      this.props.actions.addTodoList(updateItem);
  }

  render() {

    const { todo = [], inprogress = [], done = [] } = this.props.trelloDetails;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Trello</h1>
        </header>
        <div className='wrapper'>
            <div className='list'>
                <TodoList types = {['inprogress', 'done']} type={'todo'} cardList={ todo } updateItem={ this.updateItem } removeItem={ this.removeItem } />
            </div>
            <div className='list'>
                <InprogressList types = {['done', 'todo']} type={'inprogress'} cardList={ inprogress } updateItem={ this.updateItem } removeItem={ this.removeItem } />
            </div>
            <div className='list'>
                <DoneList types = {['todo', 'inprogress']} type={'done'} cardList={ done } updateItem={ this.updateItem } removeItem={ this.removeItem } />
            </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        trelloDetails: state.trelloReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          getTrelloDetails: bindActionCreators(getTrelloDetails, dispatch),
          addTodoList: bindActionCreators(addTodoList, dispatch),
          removeCard: bindActionCreators(removeItem, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
