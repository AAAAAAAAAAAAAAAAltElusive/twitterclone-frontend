import { ObjectId } from 'mongoose';
// import { User } from './user.types';

export interface UserData{
  _id: string,
  username: string,
}
export interface TweetType {
  _id: string;
  user: UserData,
  text: string;
  createdAt: Date;
  imageUrl?: string
}

export interface CreateTweetType {
  text: string,
  imageUrl?: string
}

export interface UpdateTweetType {
  text: string,
  imageUrl?: string,
  tweetId: string
}




