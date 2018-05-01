
class Task {
    constructor(task){
    	if(task != null)
    	{
    	this.id = task.id
        this.content = task.content;
        this.expireDate = task.expireDate;
        var priority = task.priority;
        if(priority == 1)      	
       		this.priority = 'A'
       	if(priority == 2)
       		this.priority = 'S'
       	if(priority == 3)
       		this.priority = 'SSS'
    	}	
    	this.priorityValue = task.priority;
    }

    isOverdued(){
    	var now = new Date();
    	var nowYear = now.getFullYear();
    	var nowMonth = now.getMonth()+1;
    	var nowDay = now.getDate(); 

    	var exDate = this.expireDate.split("-");

    	if(exDate[0]<nowYear)
    	{
    		return true;
    	}
    	else if(exDate[0]==nowYear)
    	{
    		if(exDate[1]<nowMonth)
    			return true;
    		else if(exDate[1]==nowMonth)
    		{
    			if(exDate[2]<nowDay)
    				return true;
    		}
    	}
    	return false;
    }
}


export default class Tasks {

    constructor(tasks){
        this.overDuedTasks = [];
        this.unOverDuedTasks = [];
        for(var i=0; i<tasks.length; i++)
        {
        	var temp = new Task(tasks[i]);
        	if(temp.isOverdued() == true)
        	{
        		this.overDuedTasks.push(temp);
        	}
        	else
        	{
        		this.unOverDuedTasks.push(temp);
        	}
        }
    }

    removeTask(key)
    {
    	let overDuedTasks = this.overDuedTasks.filter(task => {
		    return task.id != key;
		});
		this.overDuedTasks = overDuedTasks;

		let unOverDuedTasks = this.unOverDuedTasks.filter(task => {
		    return task.id != key;
		});
		this.unOverDuedTasks = unOverDuedTasks;

		return this;
    }

    addTask(task) {
	    let newTask = new Task(task);

		if(newTask.isOverdued())
			this.overDuedTasks.push(newTask);
		else
			this.unOverDuedTasks.push(newTask);

		return this;
	}

	editTask(t) {
		var task = new Task(t);
	    this.overDuedTasks.forEach(temp => {
		    if(temp.id == task.id) {
				temp.content = task.content;
				temp.expireDate = task.expireDate;
				temp.priority = task.priority;	
			}
		});

		 this.unOverDuedTasks.forEach(temp => {
		    if(temp.id == task.id) {
				temp.content = task.content;
				temp.expireDate = task.expireDate;
				temp.priority = task.priority;	
			}
		});

		return this;
	}
}