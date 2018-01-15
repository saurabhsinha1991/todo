import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';
import InprogressList from './components/inprogressList';
import DoneList from './components/doneList';
import { bindActionCreators } from 'redux';
import { getTrelloDetails, addTodoList } from './actions/trelloActions';

class App extends Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/vgkil').then( (response) => {
          return response.json();
      }).then( (details) => {
          this.props.actions.getTrelloDetails(details.data);
      });
  }

  addItem(obj) {
      debugger
      this.props.actions.addTodoList(obj);
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
                <TodoList cardList={ todo } addItem={ this.addItem } />
            </div>
            <div className='list'>
                <InprogressList cardList={ inprogress } />
            </div>
            <div className='list'>
                <DoneList cardList={ done } />
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
          addTodoList: bindActionCreators(addTodoList, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
