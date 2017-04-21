import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';


class App extends Component {
  constructor() {
    super();
    // initial state keys will be here
    this.state = {
      projects: [],
      todos: []
    }
  }

  /*
  Axios docs
  // Make a request for a user with a given ID
  axios.get('/user?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  // Optionally the request above could also be done as
  axios.get('/user', {
      params: {
        ID: 12345
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  */
  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const params = {
      url: url,
      dataType: 'json',
      cache: false
    };

    axios.get(url, params)
      .then((response) => {
        this.setState({todos: response.data}, () => {
          console.log(this.state);
        }).bind(this)
      })
      .catch ((err) => {
        console.log(err);
      })
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]});
  }

  // lifecycle method: will run every time the component is re-rendered
  // ajax ile data gelecekse ya burada, ya da componentDidMount'ta olacak
  // lifecycle methodlara documentationdan bakılabilir
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
     let projects = this.state.projects;
     projects.push(project);
     this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
