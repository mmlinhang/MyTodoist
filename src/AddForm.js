import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class addForm extends React.Component{

	handlerAdd(evt){
	    evt.preventDefault();
		let task = {};
		let addForm = ReactDOM.findDOMNode(this.refs.addForm);

		task.content = addForm.querySelector('#content').value.trim();
		task.priority = addForm.querySelector('#priority').value;
		task.expireDate = addForm.querySelector('#exDate').value.trim();

		/*
		 *表单验证
		 */
		if(task.content=='' || task.expireDate=='') {
			alert("Please full the form");
			return;
		}
		
		console.log("addFrom中：");
		console.log(this);
		this.props.addTask(task);
		addForm.reset();	
	}

	handlerReset(evt){
		evt.preventDefault();
		let addForm = ReactDOM.findDOMNode(this.refs.addForm);
		addForm.reset();
	}

	render(){
		return(
			<form className="form-horizontal" ref="addForm">
  				<div className="form-group">
  					<div className="col-sm-7">
  						<label className="sr-only" for="exampleInputEmail3">Content</label>
			    		<input type="text" className="form-control" id="content" placeholder="Content"/>
   		 			</div>		
   		 			<div className="col-sm-2">
   		 				<label className="sr-only" for="addPriority">Priority</label>
					    <select className="form-control" id="priority">
		  					<option value="1">A</option>
						  	<option value="2">S</option>
						  	<option value="3">SSS</option>
						</select>    
   		 			</div>
   		 			<div className="col-sm-3">
			       		<label className="sr-only" for="addDate">Date</label>
			            <div className="input-group date" id='date1'>  
			                <input type="text" className="form-control" id="exDate"/>  
			                <span className="input-group-addon">  
			                    <i className="glyphicon glyphicon-calendar"></i>  
			                </span>  
			            </div>   
   		 			</div>
			  	</div>
			  	<div className="form-group">
				    <div className="col-md-2 col-md-offset-3">
				      <button type="submit" className="btn btn btn-info" onClick={this.handlerAdd.bind(this)}>添加</button>
				    </div>
				    <div className="col-md-3 col-md-offset-2">
				      <button type="submit" className="btn btn btn-info" onClick={this.handlerReset.bind(this)}>重置</button>
				    </div>
			  	</div>
			</form>
		)
	}
}