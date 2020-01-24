import {
    COLLECTING_SMURF,
    SMURF_NAME,
    SMURF_AGE,
    SMURF_HEIGHT,
} from "../Actions/smurfActions";

const initialState = {
  loadingSmurf: false,
  name: "",
  age: "",
  height: "",
    
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTING_SMURF:
      return {
        ...state,
        loadingSmurf: true
      };
    case SMURF_NAME:
      return {
        ...state,
        name: action.payload
      };
      case SMURF_AGE:
        return {
         ...state,
         age: action.payload
        };
     case SMURF_HEIGHT:
       return {
        ...state,
        height: action.payload
      };
    default:
      return state;
  }
};
