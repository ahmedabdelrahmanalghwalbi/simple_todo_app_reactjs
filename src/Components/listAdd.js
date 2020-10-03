import React from "react";

class AddItem extends React.Component {
  state = {
    name: " ",
    age: " ",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name.value == " ") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: " ",
        age: " ",
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Your Name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
          />
          <input
            type="number"
            id="age"
            placeholder="Enter Your Age...."
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
export default AddItem;
