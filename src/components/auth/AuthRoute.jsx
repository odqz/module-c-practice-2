import { Navigate, Outlet } from "react-router-dom";

export function AuthRoute() {
  // When user isnt authenticated redirect them to the login page
  return !localStorage.getItem('auth-token') ? <Navigate to="/login"/> : <Outlet/>
}