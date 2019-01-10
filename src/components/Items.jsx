import React, { Component } from 'react';
import { connect } from 'react-redux';

/* Компонент для списка задач */

export default class Items extends React.Component {
 
    render() {

        let completed = this.props.completed;
    
        let listItems = this.props.items.map((item, i) => {
    
        return (
          <li key={i} style={{
            textDecoration: completed[i] === true ? 'line-through' : 'none'
          }}>
            <div className="text">{item}</div>
            <button
              onClick={this.props.clickAction.bind(this, i)}>
              Удалить задачу
            </button>
            <button
              onClick={this.props.clickToggle.bind(this, i)}>
              Задача выполнена
            </button>
          </li>
        );
      });
      return <ul>{listItems}</ul>
    }
}