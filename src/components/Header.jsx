import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nzlogo.png";
import { Button } from "./ui/button";
//import { SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";


const Header = () => {
  return (
    <div>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src={logo} className="h-10" />
        </Link>
        <Button variant='outline'>Login</Button>
        {/* <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </nav>
    </div>
  );
};

export default Header;
