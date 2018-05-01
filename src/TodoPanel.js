import React, { Component } from 'react';
import TodayTodos from './TodayTodos.js'
import AllTodos from './AllTodos.js'
import OverDueTodos from './OverDueTodos.js'
import AddForm from './AddForm.js'
import EditForm from './EditForm.js'
export default class TodoPanel extends React.Component{

    render(){
        let todos;
        if(this.props.tasks != null && this.props.dtype == 'today')
        {
            todos=(
                <TodayTodos todayTasks={this.props.tasks.unOverDuedTasks} completeTask={this.props.completeTask}
                setEditTask={this.props.setEditTask}/>
            );
        }
        if(this.props.tasks != null && this.props.dtype == 'all')
        { 
            console.log("I am enter all panel :")
            console.log(this.props.completeTask)
            todos=(
                <AllTodos allTasks={this.props.tasks.unOverDuedTasks} completeTask={this.props.completeTask}
                setEditTask={this.props.setEditTask}/>
            );
        }
        let overDueTodos;
        if(this.props.tasks != null && this.props.tasks.overDuedTasks.length != 0)
        {
            overDueTodos = (
                <OverDueTodos overDueTasks={this.props.tasks.overDuedTasks} completeTask={this.props.completeTask}
                setEditTask={this.props.setEditTask}/>
            )
        }

        return(
            <div id="right" className="tab-content right">

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-9"> 
                            {overDueTodos}
                            {todos}
                            <AddForm addTask={this.props.addTask}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}