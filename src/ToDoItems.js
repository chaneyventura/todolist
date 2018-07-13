import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class ToDoItems extends Component {
  constructor(props, context){
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return <li onClick={ () => this.delete(item.key) }
    key={item.key}>{item.text}</li>
  }

  render() {
    var toDoEntries = this.props.entries;
    var listItems = toDoEntries.map(this.createTasks);

    return (
      <ul className="List">
        <FlipMove duration={300} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};

export default ToDoItems;
