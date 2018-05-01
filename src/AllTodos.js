import React, { Component } from 'react';
import TodoTable from './TodoTable.js'
export default class AllTodos extends React.Component{

	render(){


        return (
        	<div>
        		<h3>全部</h3>
	        	<TodoTable tasks={this.props.allTasks} completeTask={this.props.completeTask} setEditTask={this.props.setEditTask}/>
        	</div>
        );
	}
}