
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from '../task-form/task-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService,private dialog:MatDialog,private snackBar: MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  this.getTasks()

  }
 getTasks(){
  this.taskService.getTasks().subscribe(tasks => {
    this.tasks = tasks;
  });
 }
  
addTask(): void {
  const dialogRef = this.dialog.open(TaskFormComponent);
  dialogRef.afterClosed().subscribe((result: any) => {
    if (result)  {
      this.getTasks()
      this.snackBar.open('Task added successfully!!', 'close', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 2000,
      });
      console.log('Dialog result:', result);
    }})
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.snackBar.open('Task deleted successfully!!', 'close', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 2000,
      });
    });
    
    }
    editTask(task:Task): void {
      const dialogRef = this.dialog.open(TaskFormComponent,{
        data:{
          task:task
        }
      });
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result)  {
          this.getTasks()
          this.snackBar.open('Task updated successfully!!', 'close', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 2000,
          });
          console.log('Dialog result:', result);
        }})


      }
      // gotopage(){
      //   this.router.navigateByUrl("add-task")

      }

  








