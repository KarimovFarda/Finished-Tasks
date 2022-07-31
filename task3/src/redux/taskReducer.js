import { TASKS_ACTIONS } from "./constants";


const initialState = {
  tasks: []
};
export default function tasksReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case TASKS_ACTIONS.ADD_TASKS: {
      return { ...state, tasks: action.payload };
    }
    default:
      return state;
  }
}