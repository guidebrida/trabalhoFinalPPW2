import React from "react"
import { useContext } from "react"
import LoginContext from "../../context/ContextLogin"
import {Navigate, Outlet} from "react-router-dom"


export const CompCheckLogin = () => {

    const {login} = useContext(LoginContext)

    return login ? <Outlet></Outlet> : <Navigate to="/Login"></Navigate>;

}