import React from 'react';
import Smurf from './Smurf';
import { connect } from "react-redux";

 const SmurfList = (props)=> {
    // const isLoading = false;
    // const testSmurf = {
    //     id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
    //     name:'Poppa Smurf',
    //     position:'Village Leader',
    //     nickname: 'Pops',
    //     description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    // }

    if (props.isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
    <div className="listContainer">
      {props.smurfs.map((smurf) => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
    console.log("state:", state);
  return {
    isLoading: state.isFetching,
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps) (SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.
// Not to myself: TypeError: Cannot read properties of undefined (reading 'map') . STEP 1: console.log(state) after mapStateToProps returns:
//  state: (state = initialState, action) => {
//   switch (action.type) {
//     case _actions__WEBPACK_IMPORTED_MODULE_0__["FETCH_START"]:
//       return { ...state,
//         isLoading: true,
//         error: ""
//       }…
// smurfs is now inside the reducer

