import React, { Component } from 'react';
import './App.css';
import CourseForm from './comps/Course-form'
import CourseList from './comps/Course-list'
class App extends Component {
  state= {
    courses : [
    {name : "HTML"},
    {name : "CSS"},
    {name: "JQuery"}
  ]
  , current: ""
  }
  updateCourse = (e) => {
    this.setState ( {
      current : e.target.value
    })
  }
  addCourse = (e) => {
    e.preventDefault();
    let {current,courses} = this.state;
    if(current !== "") {
courses.push({name : current})
this.setState({
  current: "",
  courses
})
}else {
  alert("you didn't enter a Course name")
}
  }
  deleteCourse = (index) => {
let {courses} = this.state;
courses.splice(index , 1)
this.setState({
  courses
})
  }
  // edit Course
  editCourse = (index,value) => {
let {courses} = this.state;
let course = courses[index]
course['name'] = value
this.setState({
  courses
})
  }
  render() {
    const courses = this.state.courses;
    const length = courses.length;
    const map = length >0 ? courses.map( (u, i) => {
      return <CourseList  details={u.name} key={i} index={i} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    }): (
        <p className="p">There is no items to show</p>
    )
    return (
      <section className="App">
      <h2>Add Course</h2>
<ol>{map}</ol>
<CourseForm updateCourse={this.updateCourse} addCourse={this.addCourse} current={this.state.current}/>
      </section>
    )
  }
}

export default App;
