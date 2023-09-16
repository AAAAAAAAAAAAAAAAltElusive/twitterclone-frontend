import React from "react";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Layout from "./Layout";
import UsersFeed from "./components/UsersFeed";
import TweetFeed from "./components/TweetFeed";
import CreateTweet from "./components/CreateTweet";
import Explore from "./components/Explore";
import Following from "./components/Following";
import EditTweet from "./components/EditTweet";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout> <TweetFeed /> </Layout>} />
        <Route path="/userFeed" element={<Layout> <UsersFeed /> </Layout>} /> 

        <Route path="/explore" element={<Layout> <Explore /> </Layout>} />
        <Route path="/following" element={<Layout> <Following /> </Layout>} />
        <Route path="/createTweet" element={<Layout> <CreateTweet /> </Layout>} />
        <Route path="/editTweet/:tweetId" element={<Layout> <EditTweet /> </Layout>} />

        {/* <Route path="/profilePage" element={<Layout> <profilePage /> </Layout>} />    Same as timeline but instead of tweets form following will show your own tweets  */}  

      </Routes>
    </BrowserRouter>
  );
}
