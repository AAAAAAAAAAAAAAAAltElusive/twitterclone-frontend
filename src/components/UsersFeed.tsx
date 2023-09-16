import React from 'react';
import Tweet from './Tweet';

const UserTweets: React.FC = () => {
  return (
    <div className="container flex flex-col w-1/2 border-l border-r border-solid border-gray-700 min-h-screen">
      <div className="tab mt-10 py-4 text-center font-bold text-lg cursor-pointer text-twitter border-b-2 border-twitter">
        Your Tweets
      </div>
      <div className="tweets flex flex-col flex-shrink-0">
        <Tweet type='user' />
      </div>
    </div>
  );
};

export default UserTweets;
