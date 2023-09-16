import { useEffect, useState } from "react";
import axios from "axios";
import { CRD_TWEETS_ENDPOINT, GET_USER_ENDPOINT } from "../utils/endpoints";
import { CreateTweetType } from "../types/tweet.types";
import { toast, ToastContainer } from "react-toastify"

const CreateTweet = () => {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [imageUrl, setImgUrl] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await axios.get(GET_USER_ENDPOINT, { withCredentials: true });
      setUsername(response.data.username);
    } catch (error) {
      toast("Error loading user info");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleTweetClick = async () => {
    try {
      if (text === "") throw new Error("Please add text to your tweet");
      else {
        const data: CreateTweetType = { text, imageUrl };
        await axios.post(CRD_TWEETS_ENDPOINT, data, { withCredentials: true });
        toast("Tweet created successfully");
        setText("");
        setImgUrl("");
      }
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <div className="flex flex-col w-1/2 border-l border-r border-gray-700 p-4 h-screen">
      <h2 className="text-xl font-semibold mb-4">Post Tweet</h2>
      <div className="flex flex-col space-y-4">
        <span className="text-lg font-semibold">@{username}</span>
        <textarea
          name="tweet"
          id="tweet"
          placeholder="What is happening!?"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border border-gray-300 rounded-md p-3 text-lg"
        />
        <label htmlFor="url" className="mb-2">Image</label>
        <textarea
          name="url"
          id="url"
          placeholder="Add an image URL"
          cols={30}
          rows={5}
          value={imageUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
          className="border border-gray-300 rounded-md p-3 text-lg"
        />
        <button
          className="w-60 h-12 bg-blue-500 text-white rounded-md font-semibold text-lg self-center cursor-pointer"
          onClick={() => {
            handleTweetClick();
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default CreateTweet;
