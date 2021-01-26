class TasksDao{

    constructor(db) {

        this._db = db;
    }

/*  Function that returns tasks from a specific user. */

    getTasks(userObj,callback) {
        let getTasks = `select * from task where user_id = ${userObj.user_id}`;

        this._db.all(getTasks, function(err,resolve) {   
            callback(err,resolve);
        });
    }

/*  Function to insert a new task in the task table. */

    insertTask(taskObj,callback) {
        let insertTask = `insert into task(task_description,done_flag,user_id) values("${taskObj.task_description}", ${taskObj.done_flag}, ${taskObj.user_id})`;

        this._db.run(insertTask, function(err,resolve) {
            callback(err,resolve);
        });
    }

/*  Function to delete task. */

    deleteTask(taskObj,callback) {
        let deletetTask = `delete from task where task_id = ${taskObj.task_id}`;

        this._db.run(deletetTask, function(err,resolve) {
            callback(err,resolve);
        });
    }

   /* Function to update task. */

    updateTask(taskObj,callback) {
        let updateTask = `update task set task_description = "${taskObj.task_description}" where task_id = ${taskObj.task_id}`;

        this._db.run(updateTask, function(err,resolve) {
            callback(err,resolve);
        })
    }

    /* Function to end a task. */

    completeTask(taskObj,callback) {
        let updateTask = `update task set done_flag = ${taskObj.done_flag} where task_id = ${taskObj.task_id}`;

        this._db.run(updateTask, function(err,resolve){
            callback(err,resolve);
        })
    }

   /* Function to filter already completed tasks, that is, where done_flag = 1. */

    getCompleteTasks(taskObj,callback) {
        let getTasks = `select * from task where done_flag = 1 and user_id = ${taskObj.user_id}`;
        
        this._db.all(getTasks, function(err,resolve){
            callback(err,resolve);
        }); 
    }
}

module.exports = TasksDao;