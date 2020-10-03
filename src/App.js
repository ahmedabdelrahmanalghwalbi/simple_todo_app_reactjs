import React from "react";
import "./App.css";
import List from "./Components/listShow";
import AddItem from "./Components/listAdd";
class App extends React.Component {
  state = {
    items: [],
  };
  deleteItems = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let allItems = this.state.items;
    allItems.push(item);
    this.setState({ items: allItems });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="todo-heading">Todo App</h1>
          <List items={this.state.items} deleteItems={this.deleteItems} />
          <AddItem addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
