import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class EditForm extends React.Component{

	handlerEdit(evt){
	    evt.preventDefault();
		let task = {};
		let editForm = ReactDOM.findDOMNode(this.refs.editForm);

		task.content = editForm.querySelector('#content').value.trim();
		task.priority = editForm.querySelector('#priority').value;
		task.expireDate = editForm.querySelector('#exDate').value.trim();
		task.id = this.props.task.id;

		/*
		 *表单验证
		 */
		if(task.content=='' || task.expireDate=='') {
			alert("Please full the form");
			return;
		}
		
		this.props.editTask(task);
	}

	handlerReset(evt){
		evt.preventDefault();
		let editForm = ReactDOM.findDOMNode(this.refs.editForm);
		editForm.reset();
	}

	handlerClose(evt){
		this.props.closeEditForm();
	}

	componentDidUpdate(){
		if(this.props.task==null)
			return;
		let priorityOps = ReactDOM.findDOMNode(this.refs.priority);
		for(let i=0; i<priorityOps.options.length; i++){
			if(priorityOps.options[i].value == this.props.task.priorityValue){
			  priorityOps.options[i].selected = 'selected';
			  break;
			}
		}
	}

	render(){

		if(this.props.task==null)
			return null;

		return(					
			<div className = "overLay">  
				<form ref="editForm">
	  				<div className="form-group">
		  				<div className="col-md-4 col-md-offset-5">
							<label className="sr-only" for="exampleInputEmail3">Content</label>
				    		<input type="text" className="form-control" id="content" placeholder="Content"
				    		defaultValue={this.props.task.content}/>	
			    		</div>		
	   		 		</div>	
	   		 		<div className="form-group">
	   		 			<div className="col-md-4 col-md-offset-5">
	   		 				<label className="sr-only" for="addPriority">Priority</label>
						    <select className="form-control" id="priority" ref="priority">
			  					<option value="1">A</option>
							  	<option value="2">S</option>
							  	<option value="3">SSS</option>
							</select>    
						</div>
						<br/>
	   		 		</div>	
	   		 		<div className="form-group">			
	   		 			<div className="col-md-4 col-md-offset-5"> 
				       		<label className="sr-only" for="addDate">Date</label>
				            <div className="input-group date" id='date1'>  
				                <input type="text" className="form-control" id="exDate" defaultValue={this.props.task.expireDate}/>  
				                <span className="input-group-addon">  
				                    <i className="glyphicon glyphicon-calendar"></i>  
				                </span>  
				            </div>   	
				        </div>			   		 			
				  	</div>
				  	<div className="form-group">
				  		<div class="row">
						    <div className="col-md-2 col-md-offset-5">
						      <button type="submit" className="btn btn btn-info" onClick={this.handlerEdit.bind(this)}>确定</button>
						    </div>
						    <div className="col-md-2 col-md-offset-0">
						      <button type="submit" className="btn btn btn-info" onClick={this.handlerClose.bind(this)}>关闭</button>
						    </div>
						</div>
				  	</div>
				</form>
			</div>
					
	
		)
	}
}