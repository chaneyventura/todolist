import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import "./index.css";

class ToDoList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return (item.key !== key);
    });
    this.setState({
      items:filteredItems
    });
  }


  render () {
    return (
      <div className="ToDoListMaster">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            className="textbox"
            placeholder="shoot some bball outside the school" />
            <button type="submit"
            className="btn btn-outline-secondary btn-sm">
             + add item
             </button>
          </form>
        </div>
        <ToDoItems entries={this.state.items}
                   delete={this.deleteItem} />
      </div>
    );
  }
}

export default ToDoList;
