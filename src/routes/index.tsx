import Add from "../addEmployee"
import Home from "../home"
import Login from "../login"
import Register from "../register"

const authProtectedRoutes = [
    { path: "*", headername: '', component: <Home /> },
    { path: "/home", headername: '', component: <Home /> },
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
    { path: '/add', component: <Add/> }
]

export { authProtectedRoutes }