import { HttpClient } from "../httpClient/index";

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
        return this.put(`task/${id}`, data, id);
    }


}
console.log(window.location.origin.replace("3000","8502") + "/tasks")


export const taskService = new TaskService();