import React, { Component } from 'react';
import TodoTable from './TodoTable.js'
export default class OverDueTodos extends React.Component{

	render(){

        return (
        	<div>
        		<h3>过期</h3>
	        	<TodoTable tasks={this.props.overDueTasks} completeTask={this.props.completeTask}
	        	 setEditTask={this.props.setEditTask}/>
        	</div>
        );
	}
}