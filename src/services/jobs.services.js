import {axiosServices} from "./axios.services";

import {urls} from "../configs";

const jobsServices = {
    getAll: (job = 1) => axiosServices.get(urls.jobs, {params: {job}})
}

export {
    jobsServices
}

