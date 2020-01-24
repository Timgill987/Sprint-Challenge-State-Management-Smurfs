import axios from "axios";
export const COLLECTING_SMURF = "COLLECTING_SMURF";
export const SMURF_INFO = "SMURF_INFO";

export const smurfGet = () => dispatch => {
  dispatch({ type: COLLECTING_SMURF });
  axios 
  
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SMURF_INFO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

