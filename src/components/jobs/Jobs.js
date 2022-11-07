import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

import {Job} from "../job/Job";


const Jobs = () => {

    let {jobs, error, loading} = useSelector(state => state.jobs);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllJobs(jobs))
    }, [dispatch])

    return (
        <div>
            {jobs.map(job => <Job key={job.id} job={job}/>)}
        </div>
    );
};

export {Jobs};