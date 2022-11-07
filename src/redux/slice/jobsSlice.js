import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {jobsServices} from "../../services";


let getAllJobs = createAsyncThunk(
    'JobsSlice/getAllJobs',
    async (job, {rejectWithValue}) => {
      try {
        let {data} = await jobsServices.getAll(job);
        return data
      } catch (e) {
        return rejectWithValue(e.response.data)
      }
    }
);

let initialState = {
  jobs: [],
  error: null,
  loading: false
};

let jobsSlice = createSlice({
  name: 'jobsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => builder
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.jobs = action.payload
        state.loading = false
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.error = action.payload
        state.loading = false
      })
      .addCase(getAllJobs.pending, (state, action) => {
        state.loading = true
      })
});

const {reducer: jobsReducer} = jobsSlice;

const moviesActions = {
  getAllJobs,
}

export {
  jobsReducer,
    moviesActions
}
