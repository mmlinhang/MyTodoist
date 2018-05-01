import React, { Component } from 'react';
export default class TodoItem extends React.Component{

  	handlerDelete(evt){
        this.props.completeTask(this.props.task.id);
    }

    handlerEdit(evt){
    	this.props.setEditTask(this.props.task);
    }

    render(){
    	if(this.props.task == null)
    		return;
    	return(
    		<tr key={this.props.task.id}>
    			<td>
    				<button type="button" className="btn btn-default btn-sm" onClick={this.handlerDelete.bind(this)}>
    					<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
    				</button>
    				&nbsp;&nbsp;&nbsp;&nbsp;
    				{this.props.task.content}
    			</td>
    			<td>{this.props.task.priority}</td>
    			<td>
    				{this.props.task.expireDate}
    			</td>
    			<td>
    				<div className="btn-group">
						<button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						<span className="glyphicon glyphicon-menu-hamburger"></span>
						</button>
						<ul className="dropdown-menu">
							<li><a className="btn btn-link" onClick={this.handlerEdit.bind(this)}>编辑</a></li>
							<li><a className="btn btn-link" onClick={this.handlerDelete.bind(this)}>删除</a></li>
						</ul>
					</div>
    			</td>
    		</tr>
    	)
    }
}
