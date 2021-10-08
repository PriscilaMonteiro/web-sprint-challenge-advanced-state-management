import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR_MSG = "ADD_ERROR_MSG";

export const fetchSmurfs = () => {
  return (dispatch)=> {
    dispatch(fetchStart());

    axios.get("http://localhost:3333/smurfs")
      .then(resp=> {
        dispatch(fetchSuccess(resp.data));
      })
      .catch(err=>{
        dispatch(fetchFail(err));
      })
      


  }
}

export const fetchStart = ()=>{
  return({ type: FETCH_START} );
};

export const fetchSuccess = (value)=>{
  return({ type: FETCH_SUCCESS, payload: value });
};

export const fetchFail = (value)=>{
  return({type: FETCH_FAIL, payload: value});
};

export const addSmurf = (value)=>{
  return({type: ADD_SMURF, payload: {...value, id: Date.now()}});

};

export const addErrorMsg = (value)=>{
  return({type: ADD_ERROR_MSG, payload: value});
};



//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made. ✅
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary) ✅
//3. Add a standard action that allows us to set the value of the error message slice of state. ✅

// ### Complete actions/index.js
  // Add in the action creators and action constants needed to add a smurf to state and fetch smurfs from the server. **If at all possible, add in action cases one at a time, instead of all at once. Test your state connects and reducer cases as nessisary.**