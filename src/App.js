import {NavLink, Redirect, Route, Switch, useParams, useRouteMatch} from "react-router-dom";

function App() {
    const UserListPage = () => {
        const { path } = useRouteMatch();
        return (
            <div>
                <h1> USER LIST</h1>
                <ul>
                    {new Array(5).fill("").map((_, index) => (
                        <li key={"user_list_component_" + index}>
                            <NavLink to={`${path}/${index}`}>User {index}</NavLink>
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
        const { path } = useRouteMatch();
        return (
            <div>
                <h1>USERS</h1>
                <NavLink to='/'>Home Page</NavLink>
                <Switch>
                    <Route
                        path={path + "/:userId/profile"}
                        component={UserPage}
                    />
                    <Route path={path + "/:userId/edit"} component={EditUserPage} />
                    <Route path={path} exact component={UserListPage} />
                    <Redirect
                        from={path + "/:userId"}
                        to={path + "/:userId/profile"}
                    />
                </Switch>
            </div>
        );
    }
    const HomePage = () => <h1>HOME PAGE</h1>
    return (
    <div>
      <h1>
        APPLICATION WITH NAVIGATION
      </h1>
      <NavLink to={"/users"}>Users</NavLink>
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;


