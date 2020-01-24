import { COLLECTING_SMURF, SMURF_INFO } from "../Actions/smurfActions";

const initialState = {
  loadingSmurf: false,
  smurfInfo: []
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECTING_SMURF:
      return {
        ...state,
        loadingSmurf: true
      };
    case SMURF_INFO:
      return {
        ...state,
        smurfInfo: action.payload
      };

    default:
      return state;
  }
};
