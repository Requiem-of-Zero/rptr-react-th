import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  NavigationContent,
  NavigationLinks,
  NavigationWrapper,
} from "./Navigation.styles";

const Navigation = () => {
  const [session, setSession] = useState(false);
  return (
    <NavigationWrapper>
      <NavigationContent>
        <NavigationLinks>
          <li>
            <Link to="/"></Link>
            <img
              src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ba7e9e6a8324d0b222a5df4b0a25d829.png?VersionId=Jyx7dA3kyJVpAazJLvBAncnaN1D_AT0Q"
              alt="rapptr logo"
            />
          </li>
          <li>
            {session ? <Link to="/" onClick={() => setSession(false)}>Log Out</Link> : <Link to="/todo" onClick={() => setSession(true)}>Log In</Link>}
          </li>
        </NavigationLinks>
      </NavigationContent>
    </NavigationWrapper>
  );
};

export default Navigation;
