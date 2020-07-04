import React from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: true
      }
    ]
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    })});
  }
  render(){
    console.log(this.state.todos);
    return(
      <div className="App">
        <h1>First Line</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
