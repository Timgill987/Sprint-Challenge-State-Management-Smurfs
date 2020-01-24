import axios from "axios";

export const smurfGet = () => dispatch => {
    dispatch({type: COLLECTING_SMURF})
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data.name);
    dispatch({
         type: SMURF_NAME, payload: res.data.name,
         type: SMURF_AGE, payload: res.data.age,
        type: SMURF_HEIGHT, payload: res.data.height
    })
    
    })
    .catch(err => console.log(err));
};


export const COLLECTING_SMURF = 'COLLECTING_SMURF';
export const SMURF_NAME = 'SMURF_NAME';
export const SMURF_AGE = 'SMURF_AGE';
export const SMURF_HEIGHT = 'SMURF_HEIGHT';