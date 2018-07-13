import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import ToDoList from './ToDoList';

var destination = document.querySelector("#container");

ReactDOM.render(
  <div>
    <ToDoList />
  </div>,
  destination
);
