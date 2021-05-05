import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/ivr",
    headers: {
        "Content-type": "application/json"
    }
})

export const fetchWorkers = () => api.get("/task-router/fetch-workers")
export const getGrToken = (payload) => api.post("/task-router/get-gr-token", payload)
export const createTask = () => api.post("/task-router/create-task")

const apiTaskRouter = {
    fetchWorkers,
    getGrToken,
    createTask
}

export default {apiTaskRouter}