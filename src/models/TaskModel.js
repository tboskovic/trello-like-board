import { tasks } from '../data/tasks';

export class Task {
    constructor(title, description, status, user) {
        this.id=tasks.length;
        this.title=title;
        this.description=description;
        this.status=status;
        this.user=user;
    }

    static createTask = (title, description, status, user) => {
        try {
            if(title && description && status && user) {
                const task = new Task(title, description, status, user);
                tasks.push(task);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    static editTask = (id, title, description, status, user) => {
        try {
            if(title && description && status && user) {
                const taskIndex = tasks.findIndex(task => task.id === id);
                tasks[taskIndex].title = title;
                tasks[taskIndex].description = description;
                tasks[taskIndex].status = status;
                tasks[taskIndex].user = user;
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    static changeStatus = (id, status, update) => {
        try {
            if(status) {
                const taskIndex = tasks.findIndex(task => `${task.id}` === id);
                tasks[taskIndex].status = status;
                update(Date.now);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    static findTask = (id) => {
        try {
            const task = tasks.find(task => task.id === id);
            return task;
        } catch (e) {
            throw new Error(e);
        }
    }
}