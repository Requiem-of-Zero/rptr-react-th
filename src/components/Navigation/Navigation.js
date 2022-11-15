import React, { useState } from "react";

import {
  NavigationContent,
  NavigationLinks,
  NavigationWrapper,
} from "./Navigation.styles";

const Navigation = ({ redirectUrl }) => {
  const [session, setSession] = useState(false);
  return (
    <NavigationWrapper>
      <NavigationContent>
        <NavigationLinks>
          <li>
            <a href="#home"></a>
            <img
              src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ba7e9e6a8324d0b222a5df4b0a25d829.png?VersionId=Jyx7dA3kyJVpAazJLvBAncnaN1D_AT0Q"
              alt="rapptr logo"
            />
          </li>
          <li>
            {session ? (
              <a href={redirectUrl} onClick={() => setSession(false)}>
                Log Out
              </a>
            ) : (
              <a href={redirectUrl} onClick={() => setSession(true)}>
                Log In
              </a>
            )}
          </li>
        </NavigationLinks>
      </NavigationContent>
    </NavigationWrapper>
  );
};

export default Navigation;
