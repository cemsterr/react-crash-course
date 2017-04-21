import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
      categories: [
        'Web Design',
        'Mobile Development',
        'Web Development'
      ]
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title is required');
    } else {
      console.log(this.refs.title.value);
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function () {
        // console.log('this is a callback function');
        // console.log(this.state);
        this.refs.title.value = '';
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

// kind of a restriction to assert types
AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func,
}

export default AddProject;
