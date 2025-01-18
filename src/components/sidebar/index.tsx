import React from "react";
import { Link, useLocation } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { useUserAuth } from "@/context/UserAuthContext";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: "homeIcon",
  },
  {
    name: "Add Photos",
    link: "/post",
    icon: "addIcon",
  },
  {
    name: "My Photos",
    link: "/myphotos",
    icon: "myPhotoIcon",
  },
  {
    name: "Profile",
    link: "/profile",
    icon: "profileIcon",
  },
  {
    name: "Notifications",
    link: "#",
    icon: "notificationIcon",
  },
  {
    name: "Direct",
    link: "#",
    icon: "directIcon",
  },
  {
    name: "Settings",
    link: "#",
    icon: "settingsIcon",
  },
];
const Sidebar = () => {
  const { logOut } = useUserAuth();
  const { pathname } = useLocation();
  return (
    <nav className="flex flex-col space-x-2 relative h-screen max-w-sm w-full">
      <div className="flex justify-center m-5">
        <div className="tetx-slate-800">PhotoGram</div>
      </div>
      {navItems.map((items) => (
        <div key={items.name} className={cn(buttonVariants({ variant: "default" }), pathname === items.link ? "" : "")}>
          <Link to={items.link} className="">
            <span>{items.icon}</span>
            <span>{items.name}</span>
          </Link>
        </div>
      ))}
      <Link to="/login" className="" onClick={logOut}>
        <span></span>
        <span>Logout</span>
      </Link>
    </nav>
  );
};

export default Sidebar;
