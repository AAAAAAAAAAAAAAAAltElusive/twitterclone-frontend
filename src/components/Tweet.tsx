// Tweet.tsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { TweetType } from "../types/tweet.types";
import { Link, useNavigate } from "react-router-dom";
import { CRD_TWEETS_ENDPOINT, TIMELINE_FEED_ENDPOINT } from "../utils/endpoints";
import { toast, ToastContainer } from "react-toastify";
interface TweetProps {
  type: "user" | "timeline"
}

const Tweet: React.FC<TweetProps> = ({ type }) => {

  const navigate = useNavigate()
  const [data, setData] = useState<TweetType[]>([])

  const getFeedData = async (type: string) => {
    try {
      if (type === 'user') {
        const response = await axios.get(CRD_TWEETS_ENDPOINT, { withCredentials: true })
        setData(response.data)
      }
      else {
        const response = await axios.get(TIMELINE_FEED_ENDPOINT, { withCredentials: true })
        setData(response.data)
        console.log(response.data)
      }
    } catch (err) {
      console.log(err)
      toast("Error fetching data")
    }
  }

  const handleOnDelete = async (id: string) => {
    try {
      await axios.delete(CRD_TWEETS_ENDPOINT + `/${id}`, { withCredentials: true })
      toast("Tweet deleted succesfully")
      const updatedData = data?.filter((tweet) => tweet._id !== id)
      setData(updatedData)
    } catch (error: any) {
      toast(error.message)
    }
  }

  const handleOnUpdate = async (id: string) => {
    try {
      navigate(`/editTweet/${id}`)
    } catch (error: any) {
      toast(error.message)
    }
  }

  useEffect(() => {
    getFeedData(type)
  }, [])

  return (
    <>
      <ToastContainer/>
      {data?.map((tweet, index) => {
        const date = new Date(tweet.createdAt);
        console.log(tweet.user.username)
        return (
          <div className="flex flex-col bg-white border-b border-gray-300 p-4 max-w-full cursor-pointer hover:bg-twitter-dark-hover" key={index}>
            <div className="flex mt-3 relative">
              <div className="flex flex-col w-full ml-14">
                <div className="flex items-center text-base whitespace-nowrap">
                  <strong className="mr-2">@{tweet.user.username}</strong>
                  <span className="text-gray">{tweet.user.username}</span>
                  <div className="w-2 h-2 bg-gray ml-2" />
                  <time>{date.toDateString()}</time>
                </div>
                <p className="text-sm mt-2">{tweet.text}</p>
                <div className="mt-4">
                  {tweet.imageUrl && (
                    <img src={tweet.imageUrl} alt="Post" className="w-full h-[285px] max-h-[175px] bg-gray-300 rounded-lg" />
                  )}
                </div>
                {type === 'user' && (
                  <div className="flex w-full text-xs justify-end mt-2">
                    <span className="mr-4 text-yellow-500 border-b border-yellow cursor-pointer" onClick={() => handleOnUpdate(tweet._id)}>
                      Edit
                    </span>
                    <span className="text-red-500 border-b border-red cursor-pointer" onClick={() => handleOnDelete(tweet._id)}>
                      Delete
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );


};

export default Tweet;
