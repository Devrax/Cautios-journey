import React from "react"
import { Task as ITask } from "../interfaces/Task";
import Task from "../components/Task";
import TaskForm from "../components/TaskForm";

export default class Tasks extends React.Component<{ 
    tasks: ITask[],
    addTask: (Task: {title: string, description: string}) => void 
    deleteTask: (id: number) => void,
    checkDoneTask: (id: number) => void
    }> {
    
    public render(): JSX.Element {
        const tasks = this.props.tasks.map(task => {
            return (
                <div className="my-3" key={task.id}>
                    <Task task={task} deleteTask={this.props.deleteTask} checkDoneTask={this.props.checkDoneTask} key={task.id}/>
                </div>
            )
            }
        );

        return (
           <div>
                <div>
                    <TaskForm addTask={this.props.addTask}/>
                </div>
                <div className="p-5">
                    {tasks}
                </div>
           </div>
        )
    }

}