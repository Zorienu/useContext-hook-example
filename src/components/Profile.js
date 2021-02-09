import { useContext } from "react";

import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return selectedUser ? (
    <div className="card card-body text-center">
      <img
        src={selectedUser.avatar}
        alt="avatar"
        className="card-img-top card-body rounded-circle m-auto img-fluid"
        style={{ width: 180 }}
      />
      <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
      <h4>email: {selectedUser.email}</h4>
    </div>
  ) : (
    <h1>select a profile</h1>
  );
};

export default Profile;
