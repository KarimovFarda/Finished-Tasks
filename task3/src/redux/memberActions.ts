import { Dispatch } from "redux";
import { IMember, IMembersArr } from "../models/types";
import { HttpClient } from "../service/httpRequest";
import { MEMBERS_ACTION } from "./constants";

interface IActionGetMembers {
  type: "ADD_MEMBERS";
  payload: IMember[];
}
const request = new HttpClient("https://62b87e12f4cb8d63df5ec8f1.mockapi.io/");

export const getMembers = () => {
  request
    .get(`Member`)
    .then((response) =>
      console.log(response)
    )
    .catch((err) => console.error(err));
};

export const addMembers = (payload: any, id: Number) => (dispatch: Dispatch) => {
  request
    .post(`Member`, payload)
    .then((response) => {
      dispatch({
        type: MEMBERS_ACTION.ADD_MEMBERS,
        payload: response.data,
      });
    })
    .catch((err) => console.error(err));
};

export type MemberActions = IActionGetMembers;
export type DispatchType = (args: IMembersArr) => IMembersArr;
