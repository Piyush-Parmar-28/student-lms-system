//  Combining all the reducers here
import { combineReducers } from "redux";
import manage from "./manageAuthorization.tsx";

const allReducers= combineReducers ({
    manage

    //  It stores reducers in key-value pair
    //  eg: myManager: manager
    //  Or, we can just add the reducer name & the key-value will have same name (Object Destructuring)
})

export default allReducers