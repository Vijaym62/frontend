import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { AppRoutingModule } from './app-routing.module';
import { TaskFormComponent } from './component/task-form/task-form.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, } from '@angular/material/dialog';
import { TaskListComponent } from './component/task-list/task-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,MatSnackBarModule,
    MatButtonModule],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { TaskListComponent } from './component/task-list/task-list.component';
// import { TaskFormComponent } from './component/task-form/task-form.component';
// import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
// import { AppComponent } from './app.component';


// @NgModule({
//   declarations: [
    
//     TaskListComponent,
//     TaskFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     ReactiveFormsModule // Add ReactiveFormsModule to imports array
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
