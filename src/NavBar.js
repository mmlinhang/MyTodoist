import React, { Component } from 'react';
export default class NavBar extends React.Component{

	render(){
		 

		return(
			<div id="left" className="left">
                <div id="logoDiv" className="logoDiv">
                    <p id="logoTitle" className="logoTitle">                
                        <span>Todoist</span>
                    </p>
                </div>
                <div onClick={this.props.changeTodos}><div className="menu-item" dtype="today">今天</div></div>
                <div onClick={this.props.changeTodos}><div className="menu-item" dtype="sevenDays">未来7天</div></div>                 
                <div onClick={this.props.changeTodos}><div className="menu-item" dtype="all">全部</div></div>           
            </div>
		);
	}
}