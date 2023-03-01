import {Navigate, NavLink, Outlet, useParams, useRoutes} from "react-router-dom";

function App() {
    const UserListPage = () => {
        return (
            <div>
                <h1> USER LIST</h1>
                <ul>
                    {new Array(5).fill("").map((_, index) => (
                        <li key={"user_list_component_" + index}>
                            <NavLink to={index+"/profile"}>User {index}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    const EditUserPage = () => {
        const { userId } = useParams();
        return (
            <div>
                <h1>EDIT USER</h1>
                <ul>
                    <li>
                        <NavLink to={"/users/" + userId}>User profile Page</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/users/" + (+userId + 1)}>
                            {" "}
                            Another User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/users"}> Users List page</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    const  UserPage = () => {
        const { userId } = useParams();
        return (
            <div>
                <h1>USER PAGE</h1>
                <ul>
                    <li>
                        <NavLink to='/users'>Users List page</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/users/${userId}/edit`}>
                            Edit user
                        </NavLink>
                    </li>
                </ul>
                <p> userId:{userId}</p>
            </div>
        );
    }
    const Users = () => {
        return (
            <div>
                <h1>USERS</h1>
                <NavLink to='/'>Home Page</NavLink>
                <Outlet/>
            </div>
        );
    }
    const HomePage = () => <h1>HOME PAGE</h1>
    const routs = useRoutes([
        { path: "/", element: <HomePage/> },
        { path: "users", element: <Users/>, children: [
                { index: true, element: <UserListPage/>},
                {path: ":userId", element: <Outlet/>, children:[
                        { path: "profile", element: <UserPage /> },
                        { path: "edit", element: <EditUserPage /> },
                        { index: true, element: <Navigate to='./profile' /> },
                        { path: "*", element: <Navigate to='../profile' /> }
                    ]}
            ]},
        { path: "*", element: <Navigate to='/' /> },
    ])
    return (
    <div>
      <h1>
        APPLICATION WITH NAVIGATION
      </h1>
      <NavLink to={"/users"}>Users</NavLink>
        {routs}
    </div>
  );
}

export default App;


