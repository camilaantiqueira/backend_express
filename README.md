# Running the backend

```bash

$ docker-compose up

```

# Database Structure

Two necessary tables have been created:

1. User table for registering new users, which has the user_name and user_email 
fields that are filled in by data provided by the user, and the user_id field as 
the primary key that is automatically incremented;

2. Task table that has the fields filled with data provided by the user,
task_description and done_flag (which indicates whether the task has already been completed),
    - 0 = incomplete task
    - 1 = completed task. 

The task table also has the task_id field as the primary key, being automatically incremented, 
and the user_id field as a foreign key, which references the user table and is also a value provided 
by the user when registering a new task.
 
# Backend Structure

To explain how the endpoints can be verified, Postman was considered as a tool option.

The endpoint routes are in the routes.js file. All endpoints using POST method receive parameters through the 
request body through the body-parser middleware, so to use these endpoints, you must pass the necessary parameters 
in the Postman body - raw option in JSON format, as in the example:

```json
{
    "user_name":"name1",
    "user_email":"name1@email.com"
}
```

All other methods used receive the necessary parameters through the Postman params field, since they do not receive 
these parameters in the JSON format.

The type of each parameter can be checked in the tables described in the databaseConnection.js file.


