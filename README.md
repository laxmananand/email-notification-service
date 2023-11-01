user can set a time at which he/she wants a email notification with the description of the task that he/she has set

user - send = {time, description}

router(request)-validation(middleware) - middleware - controller -> services

request validation - easy debugging and error handling
difference between bad request and internal server error
missing fields spotted easily
invalid formats

# email-notification-service

# email-notification-service

task
create three route

1. fetch task
2. create task
3. update task

corresponding to these three routes , create three controllers function
controller -> fetch task
controller -> create task
controller -> udpate task

create task model
model -> task model

app.js

1. server run
2. route handle
3. database conn

---

2nd day

1. implement authentication and authorization
