# Task_Manager_Application
 managing tasks using Angular 15
 npm run start -> run the application
 angular CLI 16 version required in youre local sysytem and node version also above 16 or 16
1. Task Manager Application
2. using service and modal
3. here i am creating 3 components
4. task-list, task-form, delete-confirmation.
5. task-list for displaying list of task list, and here i am displaying 2 list from i initializing values in code
6.  u can see below code  private tasks: any[] = [ { title: 'Pampapathi', description: 'MCA', status: false },
  { title: 'Address', description: 'Bangalore', status: true },
];
7. in task-list component table have a title, description status and action
8. action have 3 functionality a.delete task, b. edit task, c. mark task
9. c.mark task means-> task completed and shows the  mark text in title and description value
10. edit when clicking the edit-> its route to edit and shows the value and update the value and submit and its route to the task-list component
11. add button i created in top of button u can add the title and description completed status and submit its route to the task-list component
12. delete button on clicking on the delete button open popup modal and u can delete and delete the selected index from the table
13. done form validation when the user edit and add time if title and description field empty the submit its shows message, 


https://github.com/Pampapathi12/Task_Manager_Application/assets/111368155/7c5a2f66-f782-44da-b8a6-5f1e087e7ab4

