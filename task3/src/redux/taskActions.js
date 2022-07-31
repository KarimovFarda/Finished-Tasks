import { HttpClient } from "../services/service/httpRequest";
import { TASKS_ACTIONS } from "./constants";


const request = new HttpClient("https://61e2d0883050a1001768228f.mockapi.io/api/v1");
export async function getTasks(){
  return await request
    .get(`task`)
};

export const addTasks = (payload, id) => (dispatch) => {
  request
    .post(`task`, payload)
    .then((response) => {
      dispatch({
        type: TASKS_ACTIONS.ADD_TASKS,
        payload: response.data,
      });
    })
    .catch((err) => console.error(err));
};

export const editTasks =
  (payload, taskId) => (dispatch) => {
    request
      .edit(`task/${taskId}`, payload)
      .then((response) => {
        console.log(response)
        dispatch({
          type: TASKS_ACTIONS.EDIT_TASKS,
          payload: response,
        });
      })
      .catch((err) => console.error(err));
  };

export const deleteTasks =
( taskId) => (dispatch) => {
    request
      .delete(`task/${taskId}`)
      .then((response) =>
        dispatch({
          type: TASKS_ACTIONS.DELETE_TASKS,
          payload: response,
        })
      )
      .catch((err) => console.error(err));
  };

