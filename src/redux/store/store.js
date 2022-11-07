import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {jobsReducer} from "../slice/jobsSlice";


let rootReducer = combineReducers({
    jobs: jobsReducer,

});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}
