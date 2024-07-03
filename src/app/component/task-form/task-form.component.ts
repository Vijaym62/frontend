
import { Component,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../service/task.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent  {
  
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService,private matDialogRef: MatDialogRef<TaskFormComponent>,
     @Inject(MAT_DIALOG_DATA) private data: any) 
     {
      const task=data?.task
      if(task){
        this.taskForm = this.fb.group({
          id: [task.id],
          title: [task.title, Validators.required,],
          description: [task.description, Validators.required,],
          completed: [task.completed]
        });
      }
      else{
        this.taskForm = this.fb.group({
          id: [''],
          title: ['', Validators.required,],
          description: ['', Validators.required,],
          completed: [false]
        });
      }
   
  }

  saveTask() {
    if (this.taskForm.valid){
      const task = this.taskForm.value;
    
    if (task.id) {
      this.taskService.updateTask(task).subscribe(updatedTask=> {
        this.taskForm.reset()
        this.matDialogRef.close(updatedTask)
      });
    } else {
      this.taskService.createTask(task).subscribe((newTask) =>{
        
        this.taskForm.reset()
        this.matDialogRef.close(newTask); 

      });
    }
   
    }
    
  }
}
