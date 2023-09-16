import { useEffect, useState } from "react";
import FollowButton from "../components/FollowButton";

import { GET_ALL_USERS_ENDPOINT } from "../utils/endpoints";
import axios from "axios";

import { Toast } from 'react-toastify/dist/components';
import { toast, ToastContainer } from "react-toastify";
import { User } from "../types/user.types";

const Sidebar: React.FC = () => {
    const [userList, setUserList] = useState<User[]>([])

    const getUserList = async () => {
        try {
            const response = await axios.get(GET_ALL_USERS_ENDPOINT, { withCredentials: true })
            setUserList(response.data.slice(0, 3))
            console.log(response.data)
        } catch (err) {
            console.log(err)
            toast("Error loading users")
        }
    }

    useEffect(() => {
        getUserList()
    }, [])

    return (
        <div className="w-1/4">
            <ToastContainer/>
            <div className="bg-blue-400 p-4 mt-4">
                <h2 className="text-white text-lg mb-4">Who to follow</h2>
                {
                    userList.map((d, index) => {
                        return (
                            <div className="flex justify-between items-center w-11/12 m-2" key={index}>
                                <span className="font-semibold">@{d.username}</span>
                                <FollowButton followedId={d._id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;
