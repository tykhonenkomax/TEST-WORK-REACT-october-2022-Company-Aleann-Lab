import React from 'react';

import {Route, Routes} from "react-router-dom";

import {Headers, Jobs, JobsDetails} from "./components";


function App() {

    return (
        <Routes>
            <Route path={'/'} element={<Headers/>}>
                <Route path={'jobs'} element={<Jobs/>}/>
                <Route path={'jobs/:id'} element={<JobsDetails/>}/>
            </Route>
        </Routes>
    );
}

export default App;
