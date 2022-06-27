import React, { FormEvent } from "react"
import { Task as ITask } from "../interfaces/Task";

export default class TaskForm extends React.Component<{ addTask: (task: { title: string; description: string }) => void}> {

    public state = {
        title: '',
        description: ''
    }

    public sender(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        this.props.addTask({...this.state});
    }

    public writeFormValue(event: any): void {
        this.setState({[event.target.name]: event.target.value})
    }

    public render() {
        return (
            <form className="flex flex-col items-center" onSubmit={this.sender.bind(this)}>

                <section className="flex flex-col w-1/2">
                    <label htmlFor="title" className="text-white">Title</label>
                    <input className="rounded" required type="text" id="title" name="title" onChange={this.writeFormValue.bind(this)} value={this.state.title} />
                </section>

                <section className="flex flex-col w-1/2">
                    <label htmlFor="description" className="text-white">Description</label>
                    <textarea className="rounded" required id="description" name="description" onChange={this.writeFormValue.bind(this)} value={this.state.description} />
                </section>

                <input className="my-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded" type="submit" value="Add Task" />

            </form>
        )
    }

}