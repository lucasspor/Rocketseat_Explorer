import { createContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({})

function AuthProvider(){
    const [data, setData] = useState()
}