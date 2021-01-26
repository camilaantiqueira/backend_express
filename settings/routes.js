const taskController = require('../controllers/tasksController');
const tasksTodo = require('../classes/tasks');
const userController = require('../controllers/userController');
const user = require('../classes/user');


const UserController = new userController();
const TaskController = new taskController();


module.exports = (app) => {

    app.get('/',(req,res) => {
        res.send('Tasks backend')
    });


/*  Endpoint to create user (the user_id is automatically incremented). 
    Parameters: 
        - user_name: string,
        - user_email: string. */

    app.post('/createUser',UserController.createUser());


/*  Endpoint to verify users. 
    Return: users: array. */

    app.get('/getUsers',UserController.getUsers());


/*  Endpoint to select tasks related to a specific user.  
    Parameter: 
        - user_id: integer.
    Return: 
        - user's tasks: array. */
    
    app.get('/userTasks',TaskController.getUserTasks());


/*  Endpoint to insert new task.
    Parameters: 
        - task_description: string,
        - done_flag (flag that indicates whether the task has been completed): integer,
        - and user_id (the id of the user who creates the new task): integer. */

    app.post('/insertTask',TaskController.insertNewTask());


/*  Endpoint to delete task. 
    Parameter: 
        - task_id (the id of the task that must be deleted): integer. */

    app.delete('/deleteTask',TaskController.deleteTask());


/*  Endpoint for updating task. It was considered that the user could change the task description.
    Parameters: 
        - task_id (the id of the task that must be changed): integer,
        - task_description (the new description): string. */

    app.post('/updateTask',TaskController.updateTask());


/*  Endpoint to complete task. It was considered that the user could select to end the task and undo the action if he wanted, alternating done_flag between 0 and 1. 
    Parameters: 
        - task_id (the id of the task to be completed ): integer,
        - done_flag (the flag indicating completed task ): integer. */

    app.post('/completeTask',TaskController.completeTask());


/*  Endpoint to select a user's complete tasks (where done_flag = 1).
    Parameter: 
        - user_id: integer. 
    Return: 
        - complete user tasks: array. */

    app.get('/getCompleteTasks',TaskController.getCompleteTasks());
    
}
