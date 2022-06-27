import React from 'react';
import Posts from './pages/Posts';
import Tasks from './pages/Tasks';
import { Task as ITask } from './interfaces/Task';
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import tasks from './sample/task.json';

export default class App extends React.Component {

  public state = {
    tasks
  }

  public addTask(task: {title: string, description: string}): void {
    const newTask = {...task, id: this.state.tasks.length, isDone: false},
    tasks = [...this.state.tasks, newTask];
    this.setState({tasks});
  }

  public deleteTask(id: number) {
    this.setState({tasks: this.state.tasks.filter(t => t.id !== id)});
  }

  public checkDoneTask(id: number) {
    this.setState({tasks: this.state.tasks.map(t => {
      if (t.id === id) t.isDone = !t.isDone;
      return t;
    })});
  }

  public render(): JSX.Element {
    const tasks = this.state.tasks as ITask[],
    defaultView = (<Tasks
    tasks={tasks}
    addTask={this.addTask.bind(this)}
    deleteTask={this.deleteTask.bind(this)}
    checkDoneTask={this.checkDoneTask.bind(this)}/>),
    activeRoute = ({isActive}) => isActive ? 'text-orange-300' : 'text-white'

    return (
      <div className="bg-slate-900 min-h-screen">
        <BrowserRouter>
        <header className="p-5">
          <nav>
            <ul className="flex justify-evenly w-full">
              <li className="text-3xl">
                <NavLink to="/tasks" className={activeRoute}>Tasks</NavLink>
              </li>
              <li className="text-3xl">
                <NavLink to="/posts" className={activeRoute}>Posts</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Navigate to="/tasks" />}></Route>
          <Route path='posts' element={ <Posts /> }></Route>
          <Route path="tasks" element={ defaultView }></Route>
        </Routes>
      </BrowserRouter>
        
      </div>
    )
  }

}
