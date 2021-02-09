import "./App.css";

// components
import UserList from "./components/UserList";
import Profile from "./components/Profile";

// Context
import UserState from "./context/User/UserState";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-7">
            <UserList />
          </div>
          <div className="col-sm-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
