import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {task: ''};
    }
 
    addItem = ((item) => {
    
      this.props.addItem(item)

    });
    
    deleteItem = (idx => {

      this.props.delItem(idx)

    });

    toggleItem = ((idx, item) => {

        this.props.toggItem(idx, item);

    });

    updateText = (e => {
        this.setState({task: e.target.value});
    });
      
    submitForm = (e => {
        e.preventDefault();
        let item = e.target[0].value;
    
        if (item) {
         this.addItem(item);
  
         //после каждого добавления задачи обнулять поле
         this.setState({task: ''}); 
        }
    });
    
    render() {
    
        let items = this.props.items;
        let completed = this.props.completed;

        return (
            <div className="todo-list">
                <form
                        onSubmit={this.submitForm}
                        className="todo-form">
                        <input
                            type="text"
                            placeholder="Введите задачу"
                            onChange={this.updateText}
                            value={this.state.task} />

                        <input type="submit" value="Добавить" />
                </form>
                <Items items={items} completed={completed} clickAction={this.deleteItem} clickToggle={this.toggleItem} />
            </div>
        );
       
    }
  }

  export function mapDispatchToProps(dispatch) {

    return {
      addItem(item) {

          dispatch({type: 'ADD_ITEM', payload: { value: item } });

      },
      delItem(id) {

          dispatch({type: 'DELETE_ITEM', payload: { id } });
        
      },
      toggItem(id, item) {

          dispatch({type: 'TOGGLE_ITEM', payload: { value: item, id } });

      }
    }
}

export function mapStateToProps(state) {
// console.log(state.todo)
    return {
        'items': state.todo.items, // передаем в props данные которые находятся в state по умолчанию
        'completed': state.todo.completed
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);