import { MEMBERS_ACTION } from "./constants";


const initialState = {
  members: []
};
export function membersReducer(
  state = initialState,
  action
){
  switch (action.type) {
    case MEMBERS_ACTION.ADD_MEMBERS: {
      return { ...state, members: action.payload };
    }
    default:
      return state;
  }
}


