import React from 'react';


import { FaHome, FaSearch, FaTwitter, FaSignOutAlt, FaUsers } from 'react-icons/fa';

import { Toast } from 'react-toastify/dist/components';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { LOGOUT_ENDPOINT } from '../utils/endpoints';
import { useNavigate } from 'react-router-dom';
import CreateTweetButton from '../components/CreateTweetButton';

const MenuBar: React.FC = () => {
  const navigate = useNavigate();

  const handleTweetClick = () => {
    navigate('/userFeed');
  };

  const handleExploreClick = () => {
    navigate('/explore');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePostClick = () => {
    navigate('/createTweet');
  };

  const handleFollowingClick = () => {
    navigate('/following');
  };

  const handleLogoutClick = async () => {
    try {
      await axios.get(LOGOUT_ENDPOINT, { withCredentials: true });
      navigate('/login');
    } catch (err) {
      toast('Error in signing out');
    }
  };

  return (
      <div className="w-1/5">
        <ToastContainer/>
      <div className="w-10 h-10 m-2 ">
      <img src="/twitterLogo.png" alt="Twitter Logo" className="max-h-12 max-w-12 m-5 mx-auto my-auto" />
      </div>
      <div className="mt-10 mb-10 flex flex-col w-full">
        <div onClick={() => { handleHomeClick() }} className="h-16 flex items-center text-lg font-normal m-2 p-4 cursor-pointer hover:border hover:border-blue-800 hover:bg-blue-400 hover:rounded-xl">
          <div className="w-8 h-8">
            <FaHome />
          </div>
          <span className="ml-8">Home</span>
        </div>
        <div onClick={() => { handleExploreClick() }} className="h-16 flex items-center text-lg font-normal m-2 p-4 cursor-pointer hover:border hover:border-blue-800 hover:bg-blue-400 hover:rounded-xl">
          <div className="w-8 h-8">
            <FaSearch />
          </div>
          <span className="ml-8">Explore</span>
        </div>
        <div onClick={() => { handleTweetClick() }} className="h-16 flex items-center text-lg font-normal m-2 p-4 cursor-pointer hover:border hover:border-blue-800 hover:bg-blue-400 hover:rounded-xl">
          <div className="w-8 h-8">
            <FaTwitter />
          </div>
          <span className="ml-8">Your Tweets</span>
        </div>
        <div onClick={() => { handleFollowingClick() }} className="h-16 flex items-center text-lg font-normal m-2 p-4 cursor-pointer hover:border hover:border-blue-800 hover:bg-blue-400 hover:rounded-xl">
          <div className="w-8 h-8">
            <FaUsers />
          </div>
          <span className="ml-8">Following</span>
        </div>
        <div
          className="h-16 flex items-center text-lg font-normal m-2 p-4 cursor-pointer hover:border hover:border-blue-800 hover:bg-blue-400 hover:rounded-xl"
          onClick={() => {
            handleLogoutClick();
          }}
        >
          <div className="w-8 h-8">
            <FaSignOutAlt />
          </div>
          <span className="ml-8">Logout</span>
        </div>
      </div>
      <div onClick={() => handlePostClick()}>
        <CreateTweetButton />
      </div>
    </div>
  );
};

export default MenuBar;
