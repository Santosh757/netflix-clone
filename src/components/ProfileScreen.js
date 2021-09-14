import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/ProfileScreen.css";
import Nav from "./Nav";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h2>Edit profile</h2>
        <div className="profileScreen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen-details">
            <h3>{user.email}</h3>
            <div className="profileScreen-plans">
              <h3>Plans(Current plan: Premium)</h3>
              <PlansScreen title="Premium" quality="4K + HDR" />
              <PlansScreen title="Basic" quality="720p" />
              <PlansScreen title="Standard" quality="1080p" />
              <button
                className="profileScreen-signout"
                onClick={() => auth.signOut()}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
