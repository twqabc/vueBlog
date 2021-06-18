import axios from "axios"

export function login(user){
  return axios.get("/api/login?user=" + user)
}