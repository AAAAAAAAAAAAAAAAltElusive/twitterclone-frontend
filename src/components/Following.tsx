import React, { useEffect, useState } from "react";
import UnfollowButton from "./UnfollowButton";
import axios from "axios";
import { GET_FOLLOWING_ENDPOINT } from "../utils/endpoints";
import { User } from "../types/user.types";
import { toast } from "react-toastify";

const Following = () => {
  const [userList, setUserList] = useState<User[]>([]);

  const getUserList = async () => {
    try {
      const response = await axios.get(GET_FOLLOWING_ENDPOINT, {
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
      <h2 className="mt-20 mb-4 text-2xl font-bold">People you follow</h2>

      <div className="flex flex-col">
        {userList?.map((user) => {
          console.log(user._id)
          return (
            <div className="flex justify-between items-center text-lg w-4/5 m-5" key={user._id}>
              <span className="font-semibold">@{user.username}</span>
              <UnfollowButton followingId={user._id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Following;
