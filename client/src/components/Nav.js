import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = ({ socket }) => {
  const [notification, setNotification] = useState("");

  // Listens after product is added
  useEffect(() => {
    socket.on("addProductResponse", (data) => {
      console.log(data);
      setNotification(
        `@${data.owner} just added ${data.name} worth $${Number(
          data.price
        ).toLocaleString()}`
      );
    });
  }, [socket]);

  // Listens after user places a bid
  useEffect(() => {
    socket.on("bidProductResponse", (data) => {
      setNotification(
        `@${data.last_bidder} just bid ${data.name} for $${Number(
          data.userInput
        ).toLocaleString()}`
      );
    });
  }, [socket]);

  return (
    <nav className="navbar">
      <div className="header">
        <Link to={"/"} className="navbar__logo">
          Bid Items
        </Link>
      </div>
      <div>
        <p style={{ color: "red" }}>{notification}</p>
      </div>
    </nav>
  );
};

export default Nav;
