import { HttpClient } from "./httpRequest";

class TaskService extends HttpClient {
    constructor(){
        super("https://61e2d0883050a1001768228f.mockapi.io/api/v1");
    }

    async getTask(){
        return this.get('task');
    }

    addTask(data){
        return this.post('task',data);
    }

    updateTask(data, id){
        return this.edit(`task/${id}`, data, id);
    }


}


export const taskService = new TaskService();
