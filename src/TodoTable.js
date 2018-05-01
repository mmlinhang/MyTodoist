import React, { Component } from 'react';
import TodoItem from './TodoItem.js'
export default class TodoTable extends React.Component{

	render(){
		var tasks = [];

        if(this.props.tasks != null)
        {
            console.log("TodoTable中：")
            console.log(this.props.setEditTask)
        	this.props.tasks.forEach(task => {
                tasks.push(<TodoItem task={task} key={task.id} completeTask={this.props.completeTask}
                     setEditTask={this.props.setEditTask}/>);
            });
        }

        return (
        	<table className="table table-hover">
                <tbody>{tasks}</tbody>
          	</table>
        );
	}
}