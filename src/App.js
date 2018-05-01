import React, { Component } from 'react';
import NavBar from './NavBar.js';
import TodoPanel from './TodoPanel.js'
import axios from 'axios'
import Tasks from './Task.js'
import EditForm from './EditForm.js'

axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			tasks: null,
			dtype: 'today',
			editTask: null
		}
	}

	componentDidMount(){
		axios.get('http://localhost:8000/listTask/today')
		.then(res => {
			this.setState({
				tasks:new Tasks(res.data)
			})
		});
	}

	changeTodos(event){
		var dtype = event.target.getAttribute('dtype');
		axios.get('http://localhost:8000/listTask/'+dtype)
		.then(res => {
			this.setState({
				tasks:new Tasks(res.data),
				dtype:dtype
			})
		});
	}

	addTask(task){
		axios.post('http://localhost:8000/tasks',
		{
			content:task.content,
			expireDate:task.expireDate,
			priority:task.priority
		})
		.then(res => {
			task.id = res.data.id;
		});

	    this.setState({
		    tasks: this.state.tasks.addTask(task)
		});
	}

	setEditTask(task){
	    this.setState({
		    editTask:task
		});
	}

	closeEditForm(){
	    this.setState({
		    editTask: null
		});
	}

	editTask(task){
		axios.put('http://localhost:8000/tasks/'+task.id, {
			content:task.content,
			expireDate:task.expireDate,
			priority:task.priority
		});

	    this.setState({
		    tasks : this.state.tasks.editTask(task)
		});
	}

	completeTask(key){
		axios.delete('http://localhost:8000/tasks/'+key);
	    this.setState({
		    tasks: this.state.tasks.removeTask(key)
		});
	}

	deleteTask(key){
		axios.delete('http://localhost:8000/tasks/'+key);
		this.setState({
		    tasks: this.state.tasks.removeTask(key)
		});
	}

	render(){
		if(this.state.tasks != null)
		{
			console.log(this.state.tasks);
		}
		return(
			<div className="wrap">	
				<NavBar changeTodos={this.changeTodos.bind(this)}/>
				<TodoPanel tasks={this.state.tasks} dtype={this.state.dtype} completeTask={this.completeTask.bind(this)}
				addTask={this.addTask.bind(this)} setEditTask={this.setEditTask.bind(this)}/>
				<EditForm task={this.state.editTask} closeEditForm={this.closeEditForm.bind(this)} 
				editTask={this.editTask.bind(this)}/>
			</div>
		)	
	};
}

export default App;