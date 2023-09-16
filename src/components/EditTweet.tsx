import { useEffect, useState } from "react";
import axios from "axios";
import { UpdateTweetType } from "../types/tweet.types";
import { useNavigate, useParams } from "react-router-dom";

import {
  GET_TWEETBYID_ENDPOINT,
  UPDATE_TWEET_ENDPOINT,
  GET_USER_ENDPOINT,
} from "../utils/endpoints";
import { toast } from "react-toastify";

const EditTweet = () => {
  const { tweetId } = useParams();
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [username, setUsername] = useState("");

  const getUserInfo = async () => {
    try {
      const response = await axios.get(GET_USER_ENDPOINT, { withCredentials: true });
      setUsername(response.data.username);
    } catch (error) {
      toast("Error loading user info");
    }
  };

  const getTweetInfo = async () => {
    try {
      const response = await axios.get(GET_TWEETBYID_ENDPOINT + `/${tweetId}`, { withCredentials: true });
      setText(response.data.text);
      setImgUrl(response.data.imgUrl);
    } catch (error) {
      toast("Error loading tweet");
    }
  };

  useEffect(() => {
    getUserInfo();
    getTweetInfo();
  }, []);

  const handleTweetClick = async () => {
    try {
      if (text === "") throw new Error("Please add text to your tweet");
      else {
        if (!tweetId) {
          throw new Error("Tweet Id Not Found");
        }
        const data: UpdateTweetType = { text, imageUrl, tweetId };
        await axios.put(UPDATE_TWEET_ENDPOINT + `\${tweetId}`, data, { withCredentials: true });
        toast("Tweet edited successfully");
        setText("");
        setImgUrl("");
        navigate("/user-tweets");
      }
    } catch (error: any) {
      toast(error.message);
    }
  };

  return (
    <div className="container p-10 h-screen">
      <h2 className="text-2xl font-bold">Edit Tweet</h2>
      <div className="createTweetWrapper">
        <span className="username text-xl font-semibold mb-4">@{username}</span>
        <textarea
          name="tweet"
          id="tweet"
          cols={30}
          rows={10}
          value={text ? text : ""}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="tweetArea border rounded-lg px-4 py-2 text-xl focus:outline-none"
        />
        <label htmlFor="url" className="mb-2">Image</label>
        <textarea
          name="url"
          id="url"
          cols={30}
          rows={5}
          value={imageUrl ? imageUrl : ""}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
          className="tweetArea border rounded-lg px-4 py-2 text-xl focus:outline-none"
        />
        <button
          className="tweetButton w-60 h-16 bg-blue-500 text-white font-semibold text-xl rounded-full mt-6 self-center cursor-pointer"
          onClick={() => {
            handleTweetClick();
          }}
        >
          Edit Tweet
        </button>
      </div>
    </div>
  );
};

export default EditTweet;
