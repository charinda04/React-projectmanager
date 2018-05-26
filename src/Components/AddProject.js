import React, { Component } from 'react';


class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }

  static defaultProp={
    categories: ['Web Design', 'Web Development', 'MobileDevelopment']
  }

  handleSubmit(e){
    conlsole.log(this.refs.title.value);
    if(this.refs.title.value === ''){
      alert('title is required');

    }else{
      this.setState({newProject:{
        title: this.ref.title.value,
        category: this.ref.category.vale
      }},function(){
        //console.log(this.state);
        this.props.addProject(newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(ategory=>{
      return <option key={category} value="caegory"> {category} </option>
    });
    return (
      <div>
        <h3>Add Project<h3/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
