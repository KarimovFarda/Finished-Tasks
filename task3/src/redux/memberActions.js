import { HttpClient } from "../services/service/httpRequest";
import { MEMBERS_ACTION } from "./constants";


const request = new HttpClient("https://62b87e12f4cb8d63df5ec8f1.mockapi.io/");

export async function getMembers(){
  return await request
    .get(`Member`)
};

export const addMembers = (payload, id) => (dispatch) => {
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

