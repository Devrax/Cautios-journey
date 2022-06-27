import React from "react";
import {Task as ITask } from "../interfaces/Task";


export default class Task extends React.Component<{ task: ITask, deleteTask: (id: number) => void, checkDoneTask: (id: number) => void}> {
    
    public render(): JSX.Element {
        const task = this.props.task;
        return (
            <div className="flex items-center text-white border border-solid border-orange-500 rounded p-2">
                <input checked={task.isDone} onChange={this.props.checkDoneTask.bind(this, task.id)} type="checkbox" className="mr-2"/>
                <span className="flex-1">
                    <h1 className={task.isDone ? 'line-through' : ''}>{task.title}</h1>
                    <p className={`text-xs text-slate-400 ${task.isDone ? 'line-through' : ''}`}>{task.description}</p>
                </span>
                <button onClick={this.props.deleteTask.bind(this, task.id)} className="flex w-8 h-8 items-center justify-center text-center bg-orange-500 rounded-xl hover:rounded-3xl hover:bg-orange-600 transition-all duration-300 text-white">
                    X
                </button>
            </div>
        )
    }

}