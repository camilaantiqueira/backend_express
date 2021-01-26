const Tasks = require('../classes/tasks');
let db = require('../settings/databaseConnection');


const tasks = new Tasks(db);

class TaskController{

    constructor() {}

    getUserTasks() {
        return function(req,res) {
            let userObj = req.query;

            tasks.getTasks(userObj, function(error,resolve) {
                if(error){
                    res.status(500).send(error);

                }else{
                    res.send(resolve);
                }
            }) 
        }
    }

    insertNewTask() {
        return function(req,res) {
            let taskObj = req.body;

            tasks.insertTask(taskObj, function(error,resolve) {
                if(error){
                    res.status(500).send(error)
                }
                else{
                    res.send("Tarefa  '" + taskObj.task_description + "' registrada.");

                }
            })
        }
    }

    deleteTask() {
        return function(req,res) {
            let taskObj = req.query;

            tasks.deleteTask(taskObj, function(error,resolve) {
                if(error){
                   res.status(500).send(error);
                }
                else{
                    res.send("Tarefa "  + taskObj.task_id  + " deletada");
                }
            })
        }
    }

    updateTask() {
        return function(req,res) {
            let taskObj = req.body;

            tasks.updateTask(taskObj, function(error,resolve) {
                if(error){
                   res.status(500).send(error);
                }
                else{ 
                    res.send("Tarefa " + taskObj.task_id + " atualizada.");
                }
            })
        }
    }

    completeTask() {
        return function(req,res) {
            let taskObj = req.body;

            tasks.completeTask(taskObj, function(error,resolve) {
                if(error){
                    res.status(500).send(error);
                }
                else{
                    res.send("Tarefa " + taskObj.task_id + " completa.");
                }
            })
        }
    }

    getCompleteTasks() { 
        return function(req,res) {
            let taskObj = req.query;

            tasks.getCompleteTasks(taskObj, function(error,resolve) {
                if(error){
                   res.status(500).send(error);
                }
                else{
                    res.send(resolve);
                }
            })
        }
    }

};

const TaskTodo = new TaskController();
module.exports = TaskController;
