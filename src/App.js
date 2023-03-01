import {NavLink, Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>
        APPLICATION WITH NAVIGATION
      </h1>
      <NavLink to={"/users"}>USERS LIST</NavLink>
      <Switch>
        <Route path='/users' component={UsersListPage} />
        <Route path='/' component={HomePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;


