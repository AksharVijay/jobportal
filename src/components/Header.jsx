import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import logo from "../assets/nzlogo.png";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { BriefcaseBusiness, BriefcaseIcon, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const showSignInHandler = () => {
    setShowSignIn(true);
  };

  const signInOverlayHandler = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <div>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src={logo} className="h-10" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={showSignInHandler}>
              Login
            </Button>
          </SignedOut>

          <SignedIn>
            <Button variant="destructive" className="rounded-full">
              <PenBox size={20} className="mr-2" />
              Post a Job
            </Button>
            <Link to="/post-job"></Link>
            <UserButton appearance={{
              elements:{
                avatarBox: "w-10 h-10"
              },
            }}>
              <UserButton.MenuItems>
                <UserButton.Link label="My Jobs" labelIcon={<BriefcaseBusiness size={15}/> } href="/my-jobs" />
                <UserButton.Link label="Saved Jobs" labelIcon={<Heart size={15}/> } href="/saved-job"/>
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="items-center justify-center fixed flex inset-0 bg-black bg-opacity-50"
          onClick={signInOverlayHandler}
        >
          <SignIn
            signUpForceRedirectUrl="/on-boarding"
            fallbackRedirectUrl="/on-boarding"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
