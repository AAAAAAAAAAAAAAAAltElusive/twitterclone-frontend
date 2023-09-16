import React, { useEffect, useState } from "react";
import FollowButton from "./FollowButton";
import axios from "axios";
import { GET_ALL_USERS_ENDPOINT } from "../utils/endpoints";
import { toast } from "react-toastify";
import { User } from "../types/user.types";

const Explore = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = async () => {
    try {
      const response = await axios.get(GET_ALL_USERS_ENDPOINT, {
        withCredentials: true,
      });
      setUserList(response.data);
    } catch (err) {
      console.log(err);
      toast("Error loading users");
    }
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <div className="flex flex-col w-1/2 border-l border-r border-gray-700 min-h-screen p-10">
      <h2 className="mt-20 mb-4 text-2xl font-bold">People you may find interesting</h2>

      <div className="flex flex-col">
        {userList?.map((user) => {
          return (
            <div className="flex justify-between items-center text-lg w-4/5 m-5" key={user._id}>
              <span className="font-semibold">@{user.username}</span>
              <FollowButton followedId={user._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
