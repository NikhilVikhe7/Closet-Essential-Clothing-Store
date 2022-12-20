import axios from "axios";


const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTlkMjAyM2RhMWFlYTQ4ZWUzMWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTEyNDczMCwiZXhwIjoxNjcxMzgzOTMwfQ.cHJUKCkVPygogCf0krLPV8AfuEq2aRcrzXb4UQHweaUeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTlkMjAyM2RhMWFlYTQ4ZWUzMWJmNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTEyNDczMCwiZXhwIjoxNjcxMzgzOTMwfQ.cHJUKCkVPygogCf0krLPV8AfuEq2aRcrzXb4UQHweaU"

export const publicRequest = axios.create({
    baseURL:BASE_URL,
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
})