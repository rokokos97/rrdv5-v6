import {NavLink, Redirect, Route, Switch, useRouteMatch} from "react-router-dom";

function App() {
    const Users = () => {
        const { path } = useRouteMatch();
        return (
            <div>
                <h1>USERS</h1>
                <NavLink to='/'>Main Page</NavLink>
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
      <NavLink to={"/users"}>USERS</NavLink>
      <Switch>
        <Route path='/users' component={Users} />
        <Route path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;


