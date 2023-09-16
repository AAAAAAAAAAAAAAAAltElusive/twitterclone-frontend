import React, { ReactNode } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserVerification } from "./hooks/useUserVerification";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { RingLoader } from "react-spinners"; 
import LogOutButton from "./components/LogOutButton";
import TweetFeed from "./components/TweetFeed";
import UsersFeed from "./components/UsersFeed";
import CreateTweetButton from "./components/CreateTweet";
import { Link } from "react-router-dom";
import Menubar from "./pages/Menubar";
import Sidebar from "./pages/Sidebar";

interface GlobalLayoutProps {
    children: ReactNode
}

const Layout = ({ children }: GlobalLayoutProps) => {

    const navigate = useNavigate()

    const checkAuth = async () => {
        try {
            await axios.get("http://localhost:4000/check", { withCredentials: true })
          } catch (err: any) {
            navigate("/login")
        }
    }
  
    useEffect(() => {
        checkAuth()
    }, [])
  

    return (
        <div className="bg-primary min-h-screen min-w-screen">
            <div className="max-w-7xl mx-auto flex justify-between">
                <Menubar />
                {children}
                <Sidebar />
            </div>
        </div>
    );
};

export default Layout;