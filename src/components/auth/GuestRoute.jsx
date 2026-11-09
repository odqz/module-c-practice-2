import { Navigate, Outlet } from "react-router-dom";

export function GuestRoute() {
  // When user is authenticated redirect them to the events page
  return localStorage.getItem('auth-token') ? <Navigate to="/"/> : <Outlet/>
}