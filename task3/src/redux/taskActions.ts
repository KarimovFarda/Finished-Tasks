import { Dispatch } from "redux";
import { ITasks, ITasksArr } from "../models/types";
import { HttpClient } from "../service/httpRequest";
import { TASKS_ACTIONS } from "./constants";

interface IActionGetTasks {
  type: "ADD_TASKS";
  payload: ITasks[];
}
const request = new HttpClient("https://61e2d0883050a1001768228f.mockapi.io/api/v1");

export const getTasks = () => {
  request
    .get(`task`)
    .then((response) =>
      console.log(response)
    )
    .catch((err) => console.error(err));
};

export const addTasks = (payload: any, id: Number) => (dispatch: Dispatch) => {
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
  (payload: any, userId: Number, taskId: Number) => (dispatch: Dispatch) => {
    request
      .edit(`task/${taskId}`, payload)
      .then((response) => {
        console.log("edited data", response.data);
        dispatch({
          type: TASKS_ACTIONS.EDIT_TASKS,
          payload: response,
        });
      })
      .catch((err) => console.error(err));
  };


export const deleteTasks =
  (userId: Number, productId: Number) => (dispatch: Dispatch) => {
    console.log(request)
    request
      .delete(`task/${productId}`)
      .then((response) =>
        dispatch({
          type: TASKS_ACTIONS.DELETE_TASKS,
          payload: response,
        })
      )
      .catch((err) => console.error(err));
  };

export type Actions = IActionGetTasks;
export type DispatchType = (args: ITasksArr) => ITasksArr;