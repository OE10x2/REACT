import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import './App.css';
import Axios from 'axios';

class App extends React.Component{
  state = {
    todos: []
  };
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}));
  }
  //Toggle Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    })});
  };
  //Delete TD
  deleteTD = (id) => {
    Axios.delete('https://jsonplaceholder.typicode.com/todos')
    .then(res => this.setState({todos: [...this.state.filter(todo => todo.id !== id)]}));
  };
  //Add TD
  addTodo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title, completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
  }
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos}
              markComplete={this.markComplete}
              deleteTD={this.deleteTD}/>
            </React.Fragment>
          )} />
          <Route path="/About" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
