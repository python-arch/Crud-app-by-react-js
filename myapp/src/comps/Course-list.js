import React, {Component} from 'react'
class CourseList extends Component {
  state = {
    isEdit : false
  }
  // renderCourse function
  renderCourse = () => {
return (
  <li className="li">
<span>{this.props.details}</span>
<button onClick={() => this.toggle()} className="buttons">Edit Course</button>
<button onClick={() =>this.props.deleteCourse(this.props.index)} className="buttons">Delete Course</button>
  </li>
)
  }
  // toggle
  toggle = () => {
  let {isEdit} = this.state;
  this.setState({
    isEdit : !isEdit
  })
  }
// renderCourseItem
updateCourseItem = (e) => {
e.preventDefault();
let index = this.props.index;
this.props.editCourse(index , this.input.value)
this.toggle()
}
  // render Update from
  renderUpdateForm = () => {
return (
  <form onSubmit={this.updateCourseItem} className="form">
<input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.details}/>
<button>updateCourse</button>
  </form>
)
  }
  render () {
    let {isEdit} = this.state;
    return (
      <React.Fragment>
{ isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
)
  }
}
export default CourseList
