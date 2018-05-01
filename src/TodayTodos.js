import React, { Component } from 'react';
import TodoTable from './TodoTable.js'
export default class TodayTodos extends React.Component{

	render(){

        return (
        	<div>
        		<h3>今天</h3>
	        	<TodoTable tasks={this.props.todayTasks} completeTask={this.props.completeTask} 
	        	setEditTask={this.props.setEditTask}/>
        	</div>
        );
	}
}