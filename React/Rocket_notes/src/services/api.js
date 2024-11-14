import axios from "axios"

export const api = axios.create({
  baseUrl: "localhost:3333"
})